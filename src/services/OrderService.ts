import type ConfirmOrderObject from "@/types/ConfirmOrderObject";
import HTTPClient from "../http-common/client_http";

class OrderService {

  getCart(): Promise<any> {
    return HTTPClient.get("/order/cart");
  }

  confirmOrder(data: ConfirmOrderObject): Promise<any> {
    return HTTPClient.post("/order/confirm", data);
  }

  getOrders(): Promise<any> {
    return HTTPClient.get("/order/orders");
  }

  addDetailToCart(priceId: number, quantity : number): Promise<any> {
    let params = {
      'priceId': priceId,
      'quantity': quantity
    };
    return HTTPClient.get("/order/addToCart", { params : params });
  }

  currentNumberConfirmed(): Promise<any> {
    return HTTPClient.get("/order/currentNumberConfirmed");
  }

}

export default new OrderService();
