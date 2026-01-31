export default function Button({ text, icon, className = "" }) {
  return (
    <button type="button" className={className}>
      {icon}
      {text && <span className="font-[Poppins]">{text}</span>}
    </button>
  );
}
