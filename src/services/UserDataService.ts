import HTTPClient from "../http-common/client_http";
import type UserDataRegPerson from "@/types/UserDataRegPerson";
import type UserDataAuth from "@/types/UserDataAuth";

class UserDataService {

  registration(data: UserDataRegPerson): Promise<any> {
    return HTTPClient.post("/registration/person", data);
  }

  auth(data: UserDataAuth): Promise<any> {
    return HTTPClient.post("/auth", data);
  }

  userMe(): Promise<any> {
    return HTTPClient.post("/hello");
  }
}

export default new UserDataService();
