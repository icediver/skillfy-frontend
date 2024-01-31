import { forwardRef, useState } from "react";

import { IField } from "./field.interface";
import ViewPassword from "../password/ViewPasword";
import clsx from "clsx";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    {
      label,
      placeholder,
      error,
      className,
      type = "text",
      Icon = false,
      style,
      ...rest
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState(type);
    return (
      <>
        <div className={clsx("relative pt-4", className)}>
          <div className="w-full text-start mb-5">{label}</div>
          <input
            ref={ref}
            placeholder={placeholder}
            type={inputType}
            {...rest}
            className="w-full rounded-md py-4 pl-4 border text-sm  outline-none  glass-morphism"
          />
          {type === "password" && (
            <ViewPassword inputType={inputType} setInputType={setInputType} />
          )}
        </div>

        <div className="h-3 text-end text-sm text-red-500">{error}</div>
      </>
    );
  },
);

Field.displayName = "Field";

export default Field;
