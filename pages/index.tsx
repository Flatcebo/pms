import type { NextPage } from "next";
import PageLayout from "@components/PageLayout";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { TextareaAutosize } from "@mui/material";
import Messenger from "@components/Messenger";

interface itemProps {
  name: string;
  price: number;
  content: string;
}

const CalendarComponent = dynamic(() => import("@components/Calendars"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [ProfileMenu, setProfileMenu] = useState(false);
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProfileMenu(any => !any);
  };

  return (
    <div className="absolute h-full w-full overflow-scroll scrollbar-hide">
      <PageLayout />

      {/* 전체 레이아웃 */}
      <div className="absolute top-[10.2em] w-[87.5vw] h-[83vh] left-[16rem] font-Nanums font-[700] bg-[#ffffff00] rounded-l-lg">
        {/* 프로젝트 현황 */}
        <div
          className="absolute top-[0.8em] left-[0.5em] h-[100px] w-[500px] text-[24px] rounded-md bg-[#ffffffee] shadow-md
       shadow-[#1d1c1cdc] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[#ffffffee]"
        >
          <div className="absolute text-[26px]">
            <ul className="absolute top-[10px] left-[10px] h-[80px] w-[490px] text-center rounded-md bg-[#ffffff00]">
              <li className="absolute top-[0px] left-[96px] w-[285px] py-[1px] flex justify-evenly rounded-sm opacity-70 ">
                <div>
                  <span className="">NEW</span>
                  <div>
                    <span className="">
                      <button className="underline underline-offset-4 hover:text-[#00000067] active:text-[black]">
                        15
                      </button>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="">ING</span>
                  <div>
                    <span className="">
                      <button className="underline underline-offset-4 hover:text-[#00000067] active:text-[black]">
                        15
                      </button>
                    </span>
                  </div>
                </div>
                <div>
                  <span>COM</span>
                  <div>
                    <span className="">
                      <button className="underline underline-offset-4 hover:text-[#00000067] active:text-[black]">
                        15
                      </button>
                    </span>
                  </div>
                </div>
              </li>
              <li className="absolute top-[0px] left-[0px] px-[25px] py-[1px] text-[blue] opacity-70 rounded-sm ">
                <span>ALL</span>
                <div>
                  <span className="">
                    <button className="underline underline-offset-4 hover:text-[#0000ff67] active:text-[blue] ">
                      15
                    </button>
                  </span>
                </div>
              </li>
              <li className="absolute top-[0px] right-[10px] px-[30px] py-[1px] text-[red] rounded-sm opacity-70 ">
                <span>MY</span>
                <div>
                  <span className="">
                    <button className="underline underline-offset-4 hover:text-[#ff000066] active:text-[red]">
                      15
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 캘린더 */}
        <div
          id="calendar"
          className="absolute top-[130px] left-[0.75em] h-[300px] w-[500px] rounded-md overflow-y-scroll scrollbar-hide
          bg-[#ffffffee] shadow-lg shadow-[#1d1c1cdc] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[#ffffffee]"
        >
          <div id="calendar button" className="flex justify-end ">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 "
              >
                <path d="M12 6v12m6-6H6" />
              </svg>
            </button>
          </div>
          <CalendarComponent />
        </div>
        {/* 메모 */}
        <div>
          <TextareaAutosize
            className="absolute top-5 left-[29.5em] h-[195px] rounded-md text-[18px] text-opacity-40 shadow-lg bg-[#ffffffee]
             shadow-[#1d1c1cdc] focus:outline-[#ff0000a8] focus:outline-[3px] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[#ffffffee]"
            style={{
              boxSizing: "border-box",
              width: "1050px",
              resize: "none",
              height: 195,
            }}
            minRows={7.2}
            maxRows={7.2}
            placeholder="MEMO"
          />
          <div
            className="absolute top-[1.2em] right-[2.2em] w-[3vw] h-[20vh] rounded-md
           bg-[#ffffffee] shadow-lg shadow-[#1d1c1cdc] hover:ring-[5px] hover:ring-[#ffffffee] hover:outline-[#ff00003c] focus:outline-[#ff0000a8] 
           active:outline-[#ff0000a3]"
          >
            <button
              className="py-[4.1em] px-[1.2em] hover:bg-[#0000ff12] active:text-[white]
             active:bg-[#0000ff26]"
            >
              <p className="text-[22px] text-center">
                저<br />장
              </p>
            </button>
          </div>
        </div>
        {/* 업무 현황 */}
        <div
          className="absolute top-[235px] left-[33.2em] h-[195px] w-[1115px] bg-[#ffffffee] rounded-md 
        shadow-lg shadow-[#1d1c1c] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[#ffffffee]"
        >
          SCOREBOARD ZONE
        </div>
        {/* 차트 현황 */}
        <div
          className="absolute top-[450px] left-[0.75em] h-[330px] w-[1635px] bg-[#ffffffee] rounded-md shadow-lg
         shadow-[#1d1c1c] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[#ffffffee]"
        >
          CHART ZONE
        </div>
        {/* 메신저 컴포넌트 */}
        {/* <Messenger /> */}
      </div>
    </div>
  );
};

export default Home;
