import updateUserService from "../services/updateUser.Service";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const updates = request.body;

  try {
    const updateUser = updateUserService(id, updates);
    response.status(200).json(updateUser);
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

export default updateUserController;
