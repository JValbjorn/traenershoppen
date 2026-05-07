export default function CTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange text-black font-bold min-w-40 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
    >
      {text}
    </button>
  );
}