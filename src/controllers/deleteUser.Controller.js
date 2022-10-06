import deleteUserService from "../services/deleteUser.Service";

const deleteUserController = (request, response) => {
  const { id } = request.params;

  try {
    const responseDelete = deleteUserService(id);
    response.status(200).json(responseDelete);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteUserController;
