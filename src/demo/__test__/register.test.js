import axios from "axios";
import { register } from "../register";

jest.mock("axios");

describe("register", () => {
  test("should get response when success", async () => {
    const user = {
      username: "name",
      password: "123456Az",
    };
    axios.post.mockResolvedValue(Promise.resolve({ data: "success" }));

    await expect(register(user)).resolves.toEqual({
      data: "success",
    });
  });

  test("should catch error when password invalid", async () => {
    const user = {
      username: "name",
      password: "123456",
    };

    await expect(register(user)).rejects.toThrowError();
  });

  test("should be rejected when request failed", async () => {
    const user = {
      username: "name",
      password: "123456Az",
    };

    axios.post.mockRejectedValue(new Error("Already Registered"));

    await expect(register(user)).rejects.toThrowError("Already Registered");
  });
});
