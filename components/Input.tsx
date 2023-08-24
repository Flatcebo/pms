import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  type: string;
  required?: boolean;
  kind?: "text" | "date" | "password";
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
  onChange,
  placeholder = "",
  value,
}: InputProps) {
  return (
    <div className="flex justify-center w-full">
      <label
        className="mb-1 block text-sm font-medium text-gray-700 "
        htmlFor={name}
      ></label>

      {kind === "text" ? (
        <input
          {...register}
          id={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="py-3 px-5 w-full text-[white] border bg-[#f7f7f700] my-0 hover:bg-[#ffffff1e] rounded-md"
        />
      ) : null}
      {kind === "date" ? (
        <input
          {...register}
          id={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-[9.5rem] py-3 px-5 text-[black] border bg-[#f7f7f700] my-3 hover:bg-[#ffffff1e]"
        />
      ) : null}
      {kind === "password" ? (
        <input
          {...register}
          id={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="py-3 px-5 w-full text-[white] border bg-[#f7f7f700] my-2 hover:bg-[#ffffff1e] rounded-md"
        />
      ) : null}
    </div>
  );
}
