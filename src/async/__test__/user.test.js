import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    await expect(register()).resolves.toEqual({});
  });
});
