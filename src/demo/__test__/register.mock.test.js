import * as verify from "../verify";
import { register } from "../register";

jest.mock("../verify");
jest.mock("axios");

describe("mock verify", () => {
  test("should catch error when password invalid", async () => {
    verify.verifyPassword.mockImplementation(() => false);
    verify.verifyUsername.mockImplementation(() => true);
    await expect(register({})).rejects.toThrowError();
  });
});
