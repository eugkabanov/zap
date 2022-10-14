import HTTPClient from "../http-common/clieent_config";
import type UserDataRegPerson from "@/types/UserDataRegPerson";
import type UserDataAuth from "@/types/UserDataAuth";

class UserDataService {
  registration(data: UserDataRegPerson): Promise<any> {
    return HTTPClient.post("/registration", data);
  }

  auth(data: UserDataAuth): Promise<any> {
    return HTTPClient.post("/auth", data);
  }
}

export default new UserDataService();
