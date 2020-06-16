import { verifyPassword, verifyUsername } from "../verify";
import { validate } from "../user";

jest.mock("../verify");

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
