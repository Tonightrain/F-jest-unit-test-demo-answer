import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const callbackMock = jest.fn();
    // Act
    filter(callbackMock, [1, 2]);
    // Assert
    expect(callbackMock).toHaveBeenCalled();
    expect(callbackMock).toHaveBeenCalledWith([1, 2]);
    expect(callbackMock).toHaveBeenCalledTimes(1);
  });

  test("toHaveReturned", () => {
    // Arrange
    const callbackMock = jest.fn(() => 1);
    // Act
    filter(callbackMock, [1, 2]);
    // Assert
    expect(callbackMock).toHaveReturned();
    expect(callbackMock).toHaveReturnedWith(1);
    expect(callbackMock).toHaveReturnedTimes(1);
  });
});
