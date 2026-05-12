import { useNavigate } from "@/utils/navigate";

export default function CTAButton({ text, onClick, className, path }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick || (() => navigate(path))}
      className={`bg-orange text-black font-bold min-w-40 px-6 py-3  hover:bg-orange-600 hover:text-black transition-colors duration-300 ${className}`}
    >
      {text}
    </button>
  );
}
