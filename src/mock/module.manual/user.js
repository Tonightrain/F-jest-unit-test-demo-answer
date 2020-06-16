import { verifyPassword, verifyUsername } from "./verify";

function validate(username, password) {
  return verifyPassword(password) && verifyUsername(username);
}

export { validate };
