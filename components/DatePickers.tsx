import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import DatePicker from "tui-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarContainer, CalendarContainerProps } from "react-datepicker";

const MyContainer = ({ className, children }: CalendarContainerProps) => {
  return (
    <div style={{ padding: "16px", background: "#216ca585", color: "#fff" }}>
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>0
      </CalendarContainer>
    </div>
  );
};

interface DatePickersProps {
  startedAt: Date;
  finishedAt: Date;
  required?: UseFormRegisterReturn;
}

export default function DatePickers({
  required,
  startedAt,
  finishedAt,
}: DatePickersProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div>
        <DatePicker
          onChange={(date: Date) => setStartDate(date)}
          calendarContainer={MyContainer}
          required
          className="text-center bg-[#1b2aaf27] hover:bg-[#5f17b637] w-[100px] text-[18px] ml-[20px] outline outline-[#5f17b637] rounded-md"
        />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
