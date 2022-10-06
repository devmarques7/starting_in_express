import loginService from "../services/loginUser.Service";

const loginController = async (request, response) => {
  const { email, password } = request.body;

  try {
    const loggedIn = await loginService(email, password);
    response.status(200).json(loggedIn);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default loginController;
