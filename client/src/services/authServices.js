
import { httpAxios } from "./helpers/HttpAxioisHelper"
export async function registerUser(user) {
    const result = await httpAxios.post("/auth/register", user).then((response) => response.data);
    return result;
}
export async function userLogin(user) {
    const result = await httpAxios.post("/auth/login", user).then((response) => response.data)
    return result;
}

// export async function getCurrentUser(loginToken) {

//     const result = await httpAxios.get("http://localhost:5000/api/v1/auth/currentUser").then((rsp) => rsp.data);
//     return result;
// }