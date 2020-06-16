import { verifyPassword, verifyUsername } from "../verify";
import { validate, register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("validate", () => {
  test("should validate username and password", () => {
    // Arrange
    // Act
    const username = "mocked username";
    const password = "mocked password";
    const result = validate(username, password);
    // Assert
    expect(verifyPassword).toHaveBeenCalledWith(password);
    expect(verifyUsername).toHaveBeenCalledWith(username);
    expect(result).toBeTruthy();
  });
});

describe("register", () => {
  test("should post user when validated", async () => {
    await expect(register()).resolves.toEqual({});
  });
});
