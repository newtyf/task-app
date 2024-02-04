import { HTMLInputTypeAttribute } from "react";

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const TextField = ({ type, placeholder }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='w-full my-2 p-3 border border-black rounded-xl'
    />
  );
};
