import HTTPClient from "../http-common/clieent_config";

class CatalogService {

  listCatalogs(): Promise<any> {
    return HTTPClient.get("api/listCatalogs");
  }

}

export default new CatalogService();
