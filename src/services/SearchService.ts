import HTTPClient from "../http-common/client_http";

class CatalogService {

  prices(itemNo: any): Promise<any> {
    let params = {
      'itemNo': itemNo,
    };
    return HTTPClient.get("price/getUserPricesByItemNo/", { params: params } );
  }

}

export default new CatalogService();