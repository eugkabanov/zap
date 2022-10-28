import type CatalogWizard2Object from "@/types/CatalogWizard2Object";
import HTTPClient from "../http-common/client_http";

class CatalogService {

  listCatalogs(): Promise<any> {
    return HTTPClient.get("/catalog/listCatalogs");
  }

  catalogWizard2(catalog : string): Promise<any> {
    console.log("catalog")
    console.log(catalog)
    let params = {
      'catalog': catalog
    };
    return HTTPClient.get<CatalogWizard2Object[]>("/catalog/catalogWizard2",  { params : params });
  }

}

export default new CatalogService();
