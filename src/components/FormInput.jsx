export default function FormInput({
  label,
  className,
  placeHolder,
  type,
  value,
  onChange,
}) {
  return (
    <div className={className}>
      <label className="font-[Poppins] font-regular text-[16px]">{label}</label>
      <input
        type={type}
        className="font-[Poppins] font-light text-[14px] border rounded-[9px] border-[#4285F4] pl-6.25 pt-4.75 pb-4.75"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
