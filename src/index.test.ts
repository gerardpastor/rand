import { describe, it, vi } from "vitest";

describe("Group", () => {
  it.concurrent("Should pass all tests", async ({ expect }) => {
    expect(true).toBe(true);
    expect("literal").toEqual("literal");
    expect("literal").toStrictEqual("literal");

    expect({ foo: "bar" }).toEqual({ foo: "bar" });

    expect(["a", "b", "c"]).contains("a");
    expect(["a", "b", "c"]).not.contains("d");

    expect(() => {
      throw Error;
    }).toThrow();

    expect(() => {
      throw Error("error message");
    }).toThrow("error message");

    expect("foo").toBeTypeOf("string");
    expect(() => "foo").toBeTypeOf("string");
    expect(() => () => {}).toBeTypeOf("function");

    const fn = vi.fn((arg) => arg);

    fn("foo");
    expect(fn).toBeCalledTimes(1);

    fn("foo");
    expect(fn).toBeCalledTimes(2);
  });
});
