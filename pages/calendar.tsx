import type { NextPage } from "next";
import dynamic from "next/dynamic";
import PageLayout from "@components/PageLayout";

const CalendarComponent = dynamic(() => import("@components/Calendars"), {
  ssr: false,
});

const Calendar: NextPage = () => {
  return (
    <div className="">
      <PageLayout />
      <div className="relative w-[88%] h-[100%] left-[15rem]">
        <div className="absolute top-[150px] h-[795px] w-full b-[#171cb624]">
          <div className="absolute left-5 h-[600px] w-[600px] top-[100px]">
            <CalendarComponent height="600px" />
          </div>
          <div className="absolute left-[650px] h-[600px] w-[1000px] top-[100px] outline">
            HISTORY ZONE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
