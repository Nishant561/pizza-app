import React from "react";

function Input({ type, indicator, identity }) {
  const capitalize = (item) => item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={indicator} className="font-semibold text-xl">
        {capitalize(identity)}
      </label>
      <input
        className="w-[300px] border-2 p-2 rounded-md"
        id={indicator}
        name={identity}
        type={type}
        placeholder={`Enter Your ${capitalize(identity)}`}
      />
    </div>
  );
}

export default Input;
