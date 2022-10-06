import registerUserService from "../services/registerUser.Service";

const registerUserController = async (request, response) => {
  const { name, email, password, isAdm } = request.body;

  const newRegister = await registerUserService(name, email, password, isAdm);

  return response.status(201).json(newRegister);
};

export default registerUserController;
