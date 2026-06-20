import api from "../config/axios";

export const loginUser = async (
  credentials
) => {

  const response =
    await api.post(
      "/auth/login",
      credentials
    );

  return response.data;
};

export const logoutUser =
  async () => {

    const response =
      await api.post(
        "/auth/logout"
      );

    return response.data;
};