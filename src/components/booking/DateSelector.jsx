// src/components/booking/DateSelector.jsx

const DateSelector = ({ dates = [], selectedDate, onDateSelect }) => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-none mb-8">
      {dates.map((date, index) => {
        const isActive = selectedDate === date;

        return (
          <button
            key={index}
            onClick={() => onDateSelect(date)}
            className={`
              px-5 py-2 rounded-lg whitespace-nowrap transition
              ${isActive
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"}
            `}
          >
            {date}
          </button>
        );
      })}
    </div>
  );
};

export default DateSelector;
