import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Confirmation from "./Confirmation.js";
import States from "./States.js";
import "../index.css";
const Checkout = (props) => {
  let uniqueCartItems = [...new Set(props.cart)];

  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    total();
  }, [props.cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < props.cart.length; i++) {
      totalVal += props.cart[i].price;
    }
    setCartTotal(totalVal);
  };

  function howManyofThis(id) {
    let hmot = props.cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const stateOptions = States.map((state) => <option>{state.name}</option>);

  const listItems = uniqueCartItems.map((el) => (
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={require("./images/" + el.image)} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  const cartItems = props.cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

  function confirmOrder() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Confirmation
          cart={props.cart}
          name={document.forms[0].elements["inputName"].value}
          email={document.forms[0].elements["inputEmail4"].value}
          card={document.forms[0].elements["inputCard"].value}
          address={document.forms[0].elements["inputAddress"].value}
          address2={document.forms[0].elements["inputAddress2"].value}
          city={document.forms[0].elements["inputCity"].value}
          state={document.forms[0].elements["inputState"].value}
          zip={document.forms[0].elements["inputZip"].value}
        />
      </React.StrictMode>
    );
  }
  function goToShop() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App cart={props.cart} />
      </React.StrictMode>
    );
  }

  return (
    <div class="bg-dark">
      <h1 style={{ color: "white", fontFamily: "monospace" }}>
        Historical Gaming Collectables
      </h1>
      <div class="bg-dark card">
        <div class="row">
          {/* HERE, IT IS THE SHOPING CART */}
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4 style={{ color: "white" }}>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div
                  style={{ color: "white" }}
                  class="col align-self-center text-right text-muted"
                >
                  Products selected: {props.cart.length}
                </div>
                <div
                  style={{ color: "white" }}
                  class="col align-self-right text-right text-muted"
                >
                  <button
                    class="btn btn-outline-danger"
                    onClick={() => {
                      goToShop();
                    }}
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
            <div>{listItems}</div>
          </div>
          <div class="float-end">
            <p
              style={{ color: "white" }}
              class="mb-0 me-5 d-flex align-items-center"
            >
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal.toFixed(2)}</span>
            </p>
            <p
              style={{ color: "white" }}
              class="mb-0 me-5 d-flex align-items-center"
            >
              <span class="small text-muted me-2">Tax:</span>
              <span class="lead fw-normal">
                ${(cartTotal * 0.07).toFixed(2)}
              </span>
            </p>
            <p
              style={{ color: "white" }}
              class="mb-0 me-5 d-flex align-items-center"
            >
              <span class="small text-muted me-2">Order total w/ tax:</span>
              <span class="lead fw-normal">
                ${(cartTotal * 1.07).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-2"></div>

            <div class="col-8">
              <h2 style={{ color: "white" }}>Payment</h2>

              <div id="liveAlertPlaceholder"></div>

              <form class="row g-3" id="checkout-form">
                <div style={{ color: "white" }} class="col-md-6">
                  <label for="inputName" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder=""
                  />
                  <div style={{ color: "white" }} class="valid-feedback">
                    Looks good!
                  </div>
                  <div style={{ color: "white" }} class="invalid-feedback">
                    Must be like, "John Doe"
                  </div>
                </div>

                <div style={{ color: "white" }} class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="123@gmail.com"
                  />
                  <div style={{ color: "white" }} class="valid-feedback">
                    Looks good!
                  </div>
                  <div style={{ color: "white" }} class="invalid-feedback">
                    Must be like, "abc@xyz.efg"
                  </div>
                </div>

                <div style={{ color: "white" }} class="col-12">
                  <label for="inputCard" class="form-label">
                    Card
                  </label>
                  <div style={{ color: "white" }} class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="bi-credit-card-fill"></i>
                    </span>
                    <input
                      type="text"
                      id="inputCard"
                      class="form-control"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Must be like, "7777-7777-7777-7777"
                    </div>
                  </div>
                </div>

                <div style={{ color: "white" }} class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div style={{ color: "white" }} class="col-12">
                  <label for="inputAddress2" class="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div style={{ color: "white" }} class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div style={{ color: "white" }} class="col-md-4">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    {stateOptions}
                  </select>
                </div>
                <div style={{ color: "white" }} class="col-md-2">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    onClick={() => {
                      confirmOrder();
                    }}
                    class="btn btn-success"
                  >
                    {" "}
                    <i class="bi-bag-check"></i> Order
                  </button>
                </div>
              </form>

              <div class="card collapse" style={{ width: 18 + "rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Order summary</h5>
                  <p class="card-text">Here is a summary of your order.</p>
                </div>
                <ul class="list-group list-group-flush"></ul>
                <a
                  href=""
                  onclick="location.reload()"
                  class="btn btn-secondary"
                >
                  {" "}
                  <i class="bi-arrow-left-circle"></i>
                  Return
                </a>
              </div>
            </div>

            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
