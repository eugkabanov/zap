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

  accountPassRecovery(email : string): Promise<any> {
    let params = {
      email: email,
    };
    return HTTPClient.post("/account/pass/recovery",  params);
  }

  accountCheckRecovery(checkUuid: string): Promise<any> {
    let params = {
      'checkUuid': checkUuid,
    };
    return HTTPClient.get("/account/check/recovery/", { params: params } );
  }

  accountPassRecoveryUpdate(login : string, pass: string, checkUuid: string): Promise<any> {
    let params = {
      login: login,
      password: pass,
      checkUuid: checkUuid
    };
    return HTTPClient.post("/account/pass/recovery/update",  params);
  }
}

export default new AccountService();
