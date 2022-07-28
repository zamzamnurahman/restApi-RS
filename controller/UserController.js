import user from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const response = await user.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
