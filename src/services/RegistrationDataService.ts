import HTTPClient from "../http-common/clieent_config";

class RegistrationDataService {
  registration(data: any): Promise<any> {
    return HTTPClient.post("/registration", data);
  }
}

export default new RegistrationDataService();
