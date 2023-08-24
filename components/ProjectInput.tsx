import type { UseFormRegisterReturn } from "react-hook-form";

interface ProjectInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  required?: string;
  kind?: "text";
  register?: UseFormRegisterReturn;
}

export default function ProjectInput({
  name,
  label,
  placeholder = "",
  type,
  required,
  kind = "text",
  register,
}: ProjectInputProps) {
  return (
    <input
      {...register}
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="px-[15px] py-[15px] ml-[20px] bg-[#1b2aaf27] text-[black] text-[18px] outline outline-[#5f17b637] rounded-md "
    />
  );
}
