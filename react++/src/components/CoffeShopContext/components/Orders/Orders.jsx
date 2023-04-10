import React, { useContext } from "react";
import { OrdersContext } from "../../CoffeShopContext";

import s from "./Orders.module.css";

const Orders = () => {
  const contextOrders = useContext(OrdersContext);
  const dataOrders = contextOrders.dataOrders;

  return (
    <div className={s.orders}>
      <h2>Orders</h2>
      <div className={s.list}>
        <div className={s.item_head}>
          <p>Order №</p>
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        {dataOrders.map((order) => (
          <div key={order.orderId} className={s.item}>
            <p className={s.item_id}>№ {order.orderId}</p>
            <div className={s.item_orders}>
              {order.order.map((el) => (
                <div key={el.id} className={s.item_order}>
                  <p>{el.name}</p>
                  <p>{el.count}</p>
                  <p>{el.price * el.count}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
