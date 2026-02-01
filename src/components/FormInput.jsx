export default function FormInput({
  label,
  className,
  placeHolder,
  type,
  value,
  onChange,
  inputClassName=""
}) {
  return (
    <div className={className}>
      <label className="font-[Poppins] font-regular text-[16px] max-xs:text-[14px] ">{label}</label>
      <input
        type={type}
        className={`font-[Poppins] font-light text-[14px] border rounded-[9px] border-[#4285F4] pl-6.25 pt-4.75 pb-4.75 outline-none max-xs:bg-white max-xs:pl-2 max-xs:pb-4.5 max-xs:pt-4.5 ${inputClassName}`}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
