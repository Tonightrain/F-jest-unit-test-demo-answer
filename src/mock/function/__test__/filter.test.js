import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const callbackFn = jest.fn();
    // Act
    filter(callbackFn, [1, 2]);
    // Assert
    expect(callbackFn).toHaveBeenCalled();
    expect(callbackFn).toHaveBeenCalledTimes(2);
    expect(callbackFn).toHaveBeenCalledWith(1);
    expect(callbackFn).toHaveBeenLastCalledWith(2);
  });

  test("toHaveReturned", () => {
    // Arrange
    const callbackFn = jest.fn(() => false);
    // Act
    const result = filter(callbackFn, [1, 2]);
    // Assert
    expect(callbackFn).toHaveReturned();
    expect(callbackFn).toHaveReturnedWith(false);
    expect(result).toEqual([]);
  });
});
