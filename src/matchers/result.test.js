test("是否相等", () => {
  expect(4).toBe(4);

  const object = { one: 1, two: 2 };
  expect(object).toEqual({ one: 1, two: 2 });

  const array = [{ one: 1 }, { two: 2 }];
  expect(array).toBe(array);
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

test("是否为真/假/空/未定义", () => {
  expect("12").toBeTruthy();
  // Falsy value: false, 0, '', null, undefined, and NaN
  expect("").toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
});

test("是否抛出X错误", () => {
  const errorFunc = () => {
    throw new Error("something wrong");
  };
  expect(errorFunc).toThrow();
  expect(errorFunc).toThrow("wrong");
  expect(errorFunc).toThrow(Error);
});

test("是否大于/小于/... X数字", () => {
  expect(2).toBeGreaterThan(1);
  expect(2).toBeGreaterThanOrEqual(2);
  expect("123".length).toBeLessThan(5);
  expect(0).toBeLessThanOrEqual(5);
  expect(NaN).toBeNaN();

  const value = 0.1 + 0.2;
  // 这句会报错，因为浮点数有舍入误差
  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});
