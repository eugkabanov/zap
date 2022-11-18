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
  
}

export default new OrderService();
