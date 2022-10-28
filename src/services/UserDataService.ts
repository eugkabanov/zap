import HTTPClient from "../http-common/client_http";
import type PersonRegistrationData from "@/types/PersonRegistrationData";
import type UserDataAuth from "@/types/UserDataAuth";

class UserDataService {

  registration(data: any): Promise<any> {
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
