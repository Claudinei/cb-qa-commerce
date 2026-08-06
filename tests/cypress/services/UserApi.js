import ApiClient from "./ApiClient";

class UserApi {

  create(user) {
    return ApiClient.post("/api/users", user);
  }

  getAll() {
    return ApiClient.get("/api/users");
  }
}

export default new UserApi();