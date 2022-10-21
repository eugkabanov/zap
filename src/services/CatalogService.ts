import HTTPClient from "../http-common/client_http";

class CatalogService {

  listCatalogs(): Promise<any> {
    return HTTPClient.get("/listCatalogs");
  }

}

export default new CatalogService();
