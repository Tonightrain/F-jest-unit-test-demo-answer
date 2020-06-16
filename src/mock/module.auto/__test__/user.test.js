import { verifyPassword, verifyUsername } from "../verify";
import validate from "../user";

jest.mock("../verify");

describe("user", () => {
  test("should validate username and password", () => {
    // Arrange
    verifyUsername.mockImplementation(() => true);
    verifyPassword.mockImplementation(() => false);
    // Act
    const username = "mocked username";
    const password = "mocked password";
    const result = validate(username, password);
    // Assert
    expect(verifyPassword).toHaveBeenCalledWith(password);
    expect(verifyUsername).not.toHaveBeenCalled();
    expect(result).toBeFalsy();
  });
});
