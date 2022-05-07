import React, { useState, useEffect } from "react";
import CardShopping from "../components/shopping/CardShopping";
import { CartState } from "../context/Context";

const ShoppingCar = () => {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();
  const [totalItems, setTotalItems] = useState();
  const [message, setMessage] = useState("");

  const createMessage = () => {
    let message = `Hola, me gustaría pedir: \n ${cart.map((item) => {
      // eslint-disable-next-line no-useless-concat
      return "Cant:" + "(" + item.qty + ")" + " " + item.name + "\n";
    })}\n\nTOTAL sin domicilio: $${total}`;
    message = encodeURI(message);
    return message;
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setTotalItems(cart.reduce((acc, curr) => acc + Number(curr.qty), 0));
  }, [cart]);
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ minHeight: "100vh", marginTop: "10rem" }}
    >
      <div className="d-flex flex-column col-sm-12 col-md-12 col-lg-10 ">
        <div className="row">
          {cart.map((item) => (
            <CardShopping key={item.id} props={item} />
          ))}
        </div>
        <div className="">
          <div className="card p-3 d-flex flex-column align-items-center">
            <span>Total Items</span>
            <span>{totalItems}</span>
            <span>Total a pagar</span>
            <hr className="border-primary" style={{ width: "75%" }} />
            <span>
              $ <span className="fs-5">{total}</span>{" "}
            </span>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center">
            {cart.length > 0 ? (
              <a
                className="btn-cardItem-yellow"
                style={{ textDecoration: "none" }}
                onClick={() => setMessage(createMessage)}
                href={`https://api.whatsapp.com/send?phone=${"+573163746523"}&text=${message}`}
              >
                Realizar Compra
              </a>
            ) : (
              <button className="btn-cardItem-yellow">Agrege Productos</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
