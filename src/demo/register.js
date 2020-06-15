import axios from "axios";
import { verifyPassword, verifyUsername } from "./verify";

function register({ username, password }) {
  if (!verifyUsername(username) || !verifyPassword(password)) {
    return Promise.reject(new Error("wrong username or password"));
  }
  return axios.post("/user", {
    username,
    password,
  });
}

export { register };
