import { ChangeEvent } from "react";

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:string
}

export const LabelledInput = ({ label, placeholder, onChange,type }: LabelledInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium mt-2">{label}</label>
      <input 
        type={type || "text"} 
        placeholder={placeholder} 
        onChange={onChange} 
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
