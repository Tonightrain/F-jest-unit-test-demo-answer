test("toHaveBeenCalled", () => {
  const mockFn = jest.fn();
  mockFn(1);
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(1);
});

test("toHaveReturned", () => {
  const mockFn = jest.fn().mockImplementation(() => 2);
  mockFn();
  mockFn();
  expect(mockFn).toHaveReturned();
  expect(mockFn).toHaveReturnedTimes(2);
  expect(mockFn).toHaveReturnedWith(2);
});

function filter(callback, array) {
  return callback(array);
}

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const callback = jest.fn();
    // Act
    filter(callback, [1, 2]);
    // Assert
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith([1, 2]);
  });

  test("toHaveReturned", () => {
    // Arrange
    const callback = jest.fn(() => 1);
    // Act
    filter(callback, [1, 2]);
    // Assert
    expect(callback).toHaveReturned();
    expect(callback).toHaveReturnedWith(1);
  });
});
