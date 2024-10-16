import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
function Register() {
  const fields = [
    { type: "text", name: "name", indicator: "name" },
    { type: "email", name: "email", indicator: "email" },
    { type: "password", name: "password", indicator: "password" },
  ];
  return (
    <>
      <div className="w-full register cart flex items-center justify-center">
        <form className="w-[400px] p-[50px]  flex flex-col gap-6 sh rounded-md">
          {fields.map((items, index) => {
            return (
              <Input
                key={index}
                type={items.type}
                indicator={items.indicator}
                identity={items.indicator}
              />
            );
          })}

          <button
            type="submit"
            className="bg-[#FE5F1E] capitalize hover:bg-[#b23301] transition-all duration-150 ease-linear rounded-3xl px-6 py-2 text-white font-thin text-2xl"
          >
            Sign Up
          </button>

          <Link
            to={"/login"}
            className="text-center hover:text-[#b23301] transition-all ease-linear duration-150"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
