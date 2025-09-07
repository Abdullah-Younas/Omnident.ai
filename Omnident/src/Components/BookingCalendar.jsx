import { useState, useMemo } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingCalendar() {
  const [selected, setSelected] = useState();

  // Generate random booked dates
  const bookedDates = useMemo(() => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const d = new Date();
      d.setDate(d.getDate() + Math.floor(Math.random() * 30));
      dates.push(d);
    }
    return dates;
  }, []);

  const modifiers = {
    booked: bookedDates,
    selected: selected,
  };

  const modifiersStyles = {
    booked: { backgroundColor: "#FF4C4C", color: "white", borderRadius: "50%" },
    selected: { backgroundColor: "#33FF9C", color: "black", borderRadius: "50%" },
  };

  return (
    <div className="w-full h-full flex flex-col p-4 bg-[#0B0F14] rounded-2xl text-white box-border">
      {/* DayPicker fills available space */}
      <div className="flex-1">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(date) => {
            if (bookedDates.some(d => d.toDateString() === date.toDateString())) return;
            setSelected(date);
          }}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          className="w-full h-full"
          footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }
        />
      </div>

      {/* Legend at the bottom */}
      <div className="mt-4 flex justify-start space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <span className="w-4 h-4 bg-[#FF4C4C] inline-block rounded-full"></span>
          <span>Booked</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-4 h-4 bg-[#33FF9C] inline-block rounded-full"></span>
          <span>Selected</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-4 h-4 bg-[#0B0F14] border border-white inline-block rounded-full"></span>
          <span>Available</span>
        </div>
      </div>
    </div>
  );
}
