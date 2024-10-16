import React from "react";
import Product from "./Product";
import Amount from "./Amount";
import Address from "./Address";
import cart from "./../../assets/images/img/cart-black.png";
function NonEmptyCart() {
  return (
    <>
      <div className="max-w-[1200px] flex items-center justify-center mx-auto non-empty-cart">
        <div className="w-[80%] relative py-[90px]">
          <div className="flex w-full items-center pb-3 gap-3 border-b-4 border-gray-600">
            <img src={cart} />
            <p className="font-semibold text-3xl">Order Summary</p>
          </div>
          <Product />
          <Amount />
          <Address />
        </div>
      </div>
    </>
  );
}

export default NonEmptyCart;
