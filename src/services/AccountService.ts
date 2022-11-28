import HTTPClient from "../http-common/client_http";

class AccountService {
  changePassword(data: any): Promise<any> {
    return HTTPClient.post("/account/update_password", data);
  }

  accountInfo(): Promise<any> {
    return HTTPClient.post("/account/info");
  }

  updatePersonInfo(data: any): Promise<any> {
    return HTTPClient.post("/account/update_person", data);
  }

  updateOrganizationInfo(data: any): Promise<any> {
    return HTTPClient.post("/account/update_organization", data);
  }

  getDisableAccountList(): Promise<any> {
    return HTTPClient.post("/account/disabledList");
  }

  enableAccount(data: any): Promise<any> {
    return HTTPClient.post("/account/enable", data);
  }
}

export default new AccountService();
