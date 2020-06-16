test("是否相等", () => {
  // TODO: change matcher
  expect(4).toBe(4);

  // TODO: change matcher
  const object = { one: 1, two: 2 };
  expect(object).toEqual({ one: 1, two: 2 });

  // TODO: change matcher
  const array = [{ one: 1 }, { two: 2 }];
  expect(array).toEqual(array);
});

test("是否包含X", () => {
  const shoppingList = ["paper towels", "beer"];
  expect(shoppingList).toContain("beer");
});

test("是否为X类型", () => {
  expect(1).toEqual(expect.any(Number));
});

test("是否匹配X", () => {
  const regexExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
  expect("12345bcd").toMatch(regexExp);
});

test("是否抛出X错误", () => {
  const errorFunc = () => {
    throw new Error("something wrong");
  };
  expect(errorFunc).toThrow(Error);
});

test("是否大于/小于/... X数字", () => {
  const value = 0.1 + 0.2;
  // 这句会报错，因为浮点数有舍入误差
  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});
