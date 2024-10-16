import React, { useEffect, useRef, useState } from "react";
import "./.././../scss/style.scss";
import { NavLink,Link } from "react-router-dom";
import logo from "./.././../assets/images/img/logo.png";
import cart from "./.././../assets/images/img/cart.png";

function Nav() {
  const links = ["Home", "menu", "offers", "register", "login"];

  const getPath = (items) => {
    return items.toLowerCase() == "home" ? "/" : `/${items.toLowerCase()}`;
  };



  return (
    <nav  className="flex-container  max-w-[1200px] py-5 mx-auto">
      <div>
        <img className="w-[150px] h-auto" src={logo} alt="logo" />
      </div>

      <div>
        <div className="links-container flex-container gap-8">
          <ul className="flex-container gap-8">
            {links.map((items, index) => (
              <li className="capitalize text-[21px]" key={index}>
                <NavLink
                  to={getPath(items)}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FE5F1E]" : "text-black hoverColor"} transition-all ease-linear duration-100`
                  }
                >
                  {items}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to={'cart'} className="cart-container bgColor transition-all duration-100 ease-linear hover:bg-[#b23301] cursor-pointer w-[70px] flex justify-center py-2 rounded-full">
            <img src={cart} className="  object-contain w-[40%]  " />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
