import { useEffect } from "react";

type ToastProps = {
  message: string;
  onCloseAction: () => void; // Renamed from onClose to onCloseAction
  duration?: number;
};

export default function Toast({
  message,
  onCloseAction,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCloseAction();
    }, duration);

    return () => clearTimeout(timer);
  }, [onCloseAction, duration]);

  return (
    <div className="fixed top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
      <span>{message}</span>
      <button onClick={onCloseAction} className="ml-4 text-red-400">
        ✖
      </button>
    </div>
  );
}
