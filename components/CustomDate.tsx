import { forwardRef, useState } from "react";

const CustomDate = ({ ...props }) => {
  console.log(props);

  const [choiceDate, setChoiceDate] = useState(props.date);

  console.log(choiceDate);

  const setNextDate = () => {
    const currentDate = choiceDate;
    const nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1));
    setChoiceDate(nextDay);
  };
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <span
        {...props}
        className="border-0 bg-transparent text-xl w-full focus:border-current focus:ring-0 focus:outline-none text-center cursor-pointer"
      >
        {props.value}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer"
        onClick={setNextDate}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

export default forwardRef(CustomDate);
