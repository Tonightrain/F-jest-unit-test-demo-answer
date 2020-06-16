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
