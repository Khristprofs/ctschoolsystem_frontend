import api from "../config/axios";

export const signupUser = async (role, data) => {
  const roleEndpoints = {
    Admin: "/users/admin",
    School_admin: "/users/school-admin",
    Properietor: "/users/properietor",
    Properietress: "/users/properietress",
    Principal: "/users/principal",
    Vice_principal: "/users/vice-principal",
    Headteacher: "/users/headteacher",
    Vice_headteacher: "/users/vice-headteacher",
    Bursar: "/users/bursar",
    Auditor: "/users/auditor",
    Teacher: "/users/teacher",
    Dean_of_study: "/users/dean-of-study",
    Student: "/users/student",
    Parent: "/users/parent",
  };

  if (!roleEndpoints[role]) {
    throw new Error("Invalid role selected");
  }

  const response = await api.post(roleEndpoints[role], data);
  return response.data;
};
