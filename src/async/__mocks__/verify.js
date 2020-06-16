const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest.fn().mockImplementation(() => true);

export { verifyPassword, verifyUsername };
