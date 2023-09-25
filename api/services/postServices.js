import { Users } from "../collections/users.js";

const postUser = async (username, discordID, email, avatar) => {
  const user = new Users();
  user.username = username;
  user.discordID = discordID;
  user.email = email;
  user.avatar = avatar;
  const result = await user.postUser();
  return result;
};

export { postUser };
