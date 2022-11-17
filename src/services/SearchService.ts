import HTTPClient from "../http-common/client_http";

class CatalogService {

  prices(itemNo: any): Promise<any> {
    return HTTPClient.get("price/getProductBy/" + itemNo);
  }

}

export default new CatalogService();
