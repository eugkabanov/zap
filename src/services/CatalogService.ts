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

  listCategories(catalog : string, ssd : string, vehicleId: string, categoryId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'vehicleId': vehicleId,
      'categoryId': categoryId
    };
    return HTTPClient.get("/catalog/listCategories",  { params : params });
  }

  listDetailByUnit(catalog : string, ssd : string, unitId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'unitId': unitId
    };
    return HTTPClient.get("/catalog/listDetailByUnit",  { params : params });
  }
  
  listQuickGroup(catalog : string, ssd : string, vehicleId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'vehicleId': vehicleId
    };
    return HTTPClient.get("/catalog/listQuickGroup",  { params : params });
  }

  listQuickDetail(catalog : string, ssd : string, vehicleId: string, groupId: string): Promise<any> {
    let params = {
      'catalog': catalog,
      'ssd': ssd,
      'vehicleId': vehicleId,
      'groupId': groupId
    };
    return HTTPClient.get("/catalog/listQuickDetail",  { params : params });
  }

}

export default new CatalogService();
