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

  addDetailToCart(priceId: number, quantity : number, priceListId : string, prc: number): Promise<any> {
    let params = {
      'priceId': priceId,
      'quantity': quantity,
      'priceListId': priceListId,
      'prc': prc
    };
    return HTTPClient.get("/order/addToCart", { params : params });
  }

  currentNumberConfirmed(): Promise<any> {
    return HTTPClient.get("/order/currentNumberConfirmed");
  }

  deleteOrderForCart(priceId: number, priceListId: string): Promise<any> {
    let params = {
      'priceId': priceId,
      'priceListId': priceListId
    };
    return HTTPClient.get("/order/cart/delete/", { params : params });
  }

  editCommentToOrderCart(comment: string, priceId: number, priceListId: string): Promise<any> {
    let params = {
      'comment': comment,
      'priceId': priceId,
      'priceListId': priceListId
    };
    return HTTPClient.get("/order/cart/edit/comment/", { params : params });
  }

  getStatusOrder(orderId: number): Promise<any> {
    let params = {
      'order_id': orderId,
    };
    return HTTPClient.get("/order/status/", { params : params });
  }

}

export default new OrderService();
