import { CheckCircle2, X } from "lucide-react";

const SuccessPopup = ({ open, title, message, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#101312]/45 px-4 py-6">
      <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-[0_24px_70px_rgba(16,19,18,0.22)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#16837a]/10 text-[#16837a]">
            <CheckCircle2 size={24} />
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close success message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#101312]/10 text-[#101312]/58 transition hover:border-[#101312]/25 hover:text-[#101312]"
          >
            <X size={18} />
          </button>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-[#101312]">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-[#101312]/64">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#101312] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#202522]"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
