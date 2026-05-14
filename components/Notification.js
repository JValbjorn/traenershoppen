import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Notification({ text, color, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return createPortal(
    <div
      className={`fixed top-10 left-1/2 -translate-x-1/2 skew-x-10 w-auto max-w-md ${color} text-white px-6 py-3 z-[100] animate-fade-in`}
    >
      <div className="flex items-center gap-2">
        <p className="font-bold text-lg -skew-x-10">{text}</p>
      </div>
    </div>,
    document.body,
  );
}
