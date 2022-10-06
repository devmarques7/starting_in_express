import listUserService from "../services/listUser.Service";

const listUserController = (request, response) => {
  const userList = listUserService();

  response.status(200).json(userList);
};

export default listUserController;
