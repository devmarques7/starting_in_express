import profileUserService from "../services/profileUser.Service";

const profileUserController = (request, response) => {
  let token = request.headers.authorization;

  try {
    const profile = profileUserService(token);
    response.status(200).json(profile);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export default profileUserController;
