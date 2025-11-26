// src/components/payments/PaymentCard.jsx

/**
 * Props:
 * - methodId: string (e.g., "upi", "card", "wallet")
 * - title: string (e.g., "UPI Payment")
 * - description?: string
 * - selected: boolean
 * - onSelect: () => void
 */

const PaymentCard = ({ methodId, title, description, selected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        w-full text-left flex items-center gap-3 
        p-4 rounded-xl border transition
        ${
          selected
            ? "border-green-500 bg-gray-800"
            : "border-gray-700 bg-gray-900 hover:bg-gray-800"
        }
      `}
    >
      {/* Radio indicator */}
      <div
        className={`
          w-5 h-5 rounded-full border flex items-center justify-center
          ${
            selected
              ? "border-green-400 bg-green-500"
              : "border-gray-500"
          }
        `}
      >
        {selected && (
          <span className="w-2.5 h-2.5 rounded-full bg-black" />
        )}
      </div>

      {/* Text section */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-xs text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Method ID badge (optional visual hint) */}
      <span className="text-[10px] uppercase tracking-wide text-gray-400">
        {methodId}
      </span>
    </button>
  );
};

export default PaymentCard;
