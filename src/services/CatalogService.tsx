import { BaseService } from './BaseService';

export class CatalogAPIService extends BaseService {
  public async getCatalogItems() {
    return this.get(``);
  }

  public async getMenCatalogItems() {
    return this.get(`category/men's clothing/`);
  }

  public async getWomenCatalogItems() {
    return this.get(`category/women's clothing/`);
  }

  public async getJewelryCatalogItems() {
    return this.get(`category/jewelery/`);
  }

  public async getElectronicsCatalogItems() {
    return this.get(`category/electronics/`);
  }
}

export const CatalogService = new CatalogAPIService();
