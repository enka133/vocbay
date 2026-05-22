import { describe, expect, test } from "bun:test";
import { LAPSE_SANDBOX_MS, LapseSandbox } from "../src/scheduler";

const t0 = 1_000_000;

describe("lapse sandbox", () => {
  test("sandbox lockout is 15 minutes", () => {
    expect(LAPSE_SANDBOX_MS).toBe(15 * 60 * 1000);
  });

  test("a lapsed card is not ready before 15 minutes elapse", () => {
    const sandbox = new LapseSandbox();
    sandbox.push("card-a", t0);

    expect(sandbox.isReady("card-a", t0 + 60_000)).toBe(false); // 1 min later
    expect(sandbox.ready(t0 + 14 * 60_000)).toEqual([]); // 14 min later
    expect(sandbox.pending(t0 + 60_000)).toEqual(["card-a"]);
  });

  test("a lapsed card becomes ready once 15 minutes elapse", () => {
    const sandbox = new LapseSandbox();
    sandbox.push("card-a", t0);

    expect(sandbox.isReady("card-a", t0 + LAPSE_SANDBOX_MS)).toBe(true);
    expect(sandbox.ready(t0 + LAPSE_SANDBOX_MS)).toEqual(["card-a"]);
  });

  test("ready cards are returned in earliest-ready order and release removes them", () => {
    const sandbox = new LapseSandbox();
    sandbox.push("card-late", t0 + 5 * 60_000);
    sandbox.push("card-early", t0);

    const at = t0 + LAPSE_SANDBOX_MS + 6 * 60_000;
    expect(sandbox.ready(at)).toEqual(["card-early", "card-late"]);

    const released = sandbox.release(at);
    expect(released).toEqual(["card-early", "card-late"]);
    expect(sandbox.size).toBe(0);
  });

  test("re-failing a card resets its lockout timer", () => {
    const sandbox = new LapseSandbox();
    sandbox.push("card-a", t0);
    sandbox.push("card-a", t0 + 10 * 60_000); // failed again 10 min later

    expect(sandbox.isReady("card-a", t0 + LAPSE_SANDBOX_MS)).toBe(false);
    expect(sandbox.isReady("card-a", t0 + 10 * 60_000 + LAPSE_SANDBOX_MS)).toBe(true);
  });
});
