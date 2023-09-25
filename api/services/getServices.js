import { Users } from "../collections/users.js";

const getUser = async (username) => {
  const user = new Users();
  user.username = username;
  const result = await user.searchUser();
  return result;
};
const getEmail = async (email) => {
  const user = new Users();
  user.email = email;
  const result = await user.searchEmail();
  return result;
};
export { getUser, getEmail };
