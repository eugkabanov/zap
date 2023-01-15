import HTTPClient from "../http-common/client_http";
import type UserDataAuth from "@/types/UserDataAuth";
import type CompanyRegistrationData from "@/types/CompanyRegistrationData";

class UserDataService {

  registrationPerson(data: any): Promise<any> {
    return HTTPClient.post("/registration/person", data);
  }

  registrationCompany(data: CompanyRegistrationData): Promise<any> {
    return HTTPClient.post("/registration/organization", data);
  }

  auth(data: UserDataAuth): Promise<any> {
    return HTTPClient.post("/auth", data);
  }

  userMe(): Promise<any> {
    return HTTPClient.post("/hello");
  }
}

export default new UserDataService();
