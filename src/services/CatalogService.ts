import type CatalogWizard2Object from "@/types/CatalogWizard2Object";
import CatalogCategoryViewVue from "@/views/Catalog/CatalogCategoryView.vue";
import HTTPClient from "../http-common/client_http";

class CatalogService {

  listCatalogs(): Promise<any> {
    return HTTPClient.get("/catalog/listCatalogs");
  }

  catalogWizard2(catalog : string, ssd : string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd
    };
    return HTTPClient.get("/catalog/catalogWizard2",  { params : params });
  }

  findVehicleByWizard2(catalog : string, ssd : string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd
    };
    return HTTPClient.get("/catalog/findVehicleByWizard2",  { params : params });
  }

  listUnits(catalog : string, ssd : string, vehicleId: string, categoryId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'vehicleId': vehicleId,
      'categoryId': categoryId
    };
    return HTTPClient.get("/catalog/listUnits",  { params : params });
  }

  listDetailByUnit(catalog : string, ssd : string, unitId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'unitId': unitId
    };
    return HTTPClient.get("/catalog/listDetailByUnit",  { params : params });
  }
  
}

export default new CatalogService();
