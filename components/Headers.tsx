// sidebar hidden,icon
// bell icon add
// y.m.d.time add
// today work spin style add - db connect

// Google fonts jua add

/*
// Sidebar On Off button 추가
*/
import Image from "next/image";
import headerMark from "@public/headerMark.png";
import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Popup } from "reactjs-popup";
import Link from "next/link";
import { BsMegaphone, BsMegaphoneFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import FishkingIcon from "@public/fishking-icon-80.png";
import SmartFishingIcon from "@public/smartfishing-icon-80.png";
import FishShipIcon from "@public/app-fishship.png";
import FishShopIcon from "@public/app-fishshop.png";
import SideBar from "@components/SideBar";

interface itemProps {
  name: string;
  price: number;
  content: string;
  color: string;
}

const Headers = () => {
  const [data, setData] = useState<itemProps>();
  useEffect(() => {
    /*
    (async () => {
      const item = await (await fetch(`/api/admin`)).json();
      setData(item);
    })();
    */
  }, []);

  const [ProfileMenu, setProfileMenu] = useState(false);
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setProfileMenu(any => !any);
  };

  const [sidebarOnOff, setSidebarOnOff] = useState(false);

  const onSidebar = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSidebarOnOff(any => !any);
  };

  return (
    // 전체 레이아웃
    <div className="relative">
      <div className="">
        <div
          id="header"
          className="absolute w-[100vw] 2xl:h-[15.5vh] rounded-lg 
          font-Nanum-Godic shadow-md shadow-[#607289]
          sm:h-[12vh]"
        >
          <div className="">
            {/* 투비 로고, PMS text */}
            <div
              className="sm:w-[24.5vw] sm:h-[12vh]
                          2xl:w-[12.7vw] 2xl:h-[15.5vh]
                        bg-[#1c577c4e] rounded-md shadow-lg shadow-[#00f7ff5d]"
            >
              <ul
                className="relative 2xl:top-[1.7em] 2xl:h-[10vh] 2xl:w-[11.5vw] flex justify-between items-center
              sm:top-[0.8em] sm:h-[10vh] sm:w-[18.5vw]"
              >
                <li className="pl-[1em]">
                  <Image
                    id="tobemark"
                    src={headerMark}
                    alt="LOGO"
                    width={50}
                    height={70}
                    className=""
                  />
                </li>
                <div className="">
                  <li className="">
                    {/* PMS 이름 */}
                    <h2
                      className="relative 2xl:left-[0.4em] 2xl:text-[40px] ml-[1rem]
                    sm:text-[28px] sm:left-[1em]"
                    >
                      <span className="">PMS</span>
                    </h2>
                  </li>
                  <div className="absolute right-4"></div>
                </div>
              </ul>
              {sidebarOnOff ? (
                <AccorSidebar className="sm:block 2xl:hidden">
                  <div className="flex justify-center text-[20px]">
                    <button onClick={onSidebar}>
                      <FiChevronDown />
                    </button>
                  </div>
                </AccorSidebar>
              ) : (
                <AccorSidebar className="sm:block 2xl:hidden">
                  <div className="flex justify-center text-[20px]">
                    <button onClick={onSidebar}>
                      {/* <FiChevronDown /> */}
                      {/* <SideBar /> 애가 하이드레이트 오류뜸 */}
                    </button>
                  </div>
                </AccorSidebar>
              )}
            </div>

            {/* 공지사항 존 */}
            <div className="relative">
              <div
                className="relative 2xl:-top-[9.4em] 2xl:left-[16em] h-[5.8vh] w-[86.5vw] bg-[#64a9b221] rounded-l-md shadow-2xl shadow-[#00f7ff34]
                                        sm:-top-[7.3em] sm:left-[11em]"
              >
                {/* 공지 사항 */}
                <div className="relative -top-[0.3em] left-[0em] rounded-md">
                  <div className="">
                    <Link href="/pagenotice">
                      <button className="relative -top-[0.6em] left-[0.2em]">
                        <span className="animate-ping absolute left-[0.75em] top-[1.1em] inline-flex h-[20%] w-[35%] rounded-full bg-[#27cabce4]" />
                        <span className="relative inline-flex top-[0.8em] left-[0em] rounded-full h-[0.8em] w-[0.8em] bg-[#279ecaab]" />
                        <span>
                          <BsMegaphoneFill className="w-[2.25em] h-[2.25em] text-[#f106067b] hover:text-[#ffffffb6] active:text-[#ffffffe3]" />
                        </span>
                      </button>
                    </Link>
                    {/* <Popup
                      trigger={
                      }
                      modal
                    >
                      {/* 공지 사항 모달 */}
                    {/* <div className="absolute -top-[24em] -left-[44em]"> */}
                    {/* <Link href="/pagenotice">
                          <button
                            className="absolute right-[0px] -top-[1.5em] rounded-t-md rounded-br-sm px-[2em] bg-[#0c39ff2b] outline outline-[#0c39ff4f] 
                      hover:bg-[#0c39ff53] active:bg-[#0c39ff2b] hover:text-[#ffffffbb] active:text-[#000000a8] text-[20px] text-[#ffffffa1] font-semibold"
                          >
                            이동
                          </button>
                        </Link>
                        <div className="border w-[20em] h-[25em] outline outline-[#0c39ff4f] rounded-md backdrop-blur-[10px] flex justify-center items-center">
                          <ul className="w-[19em] h-[24em] rounded-sm outline outline-[#0008ff59] text-center leading-[3.5em] overflow-y-scroll scrollbar-hide bg-[#ff0c0c00] ">
                            <div className="font-bold text-[20px] text-[#000000a8]">
                              <Link href="">
                                <li className="">
                                  <p className="">dddddd</p>
                                </li>
                              </Link>
                              <Link href="">
                                <li>
                                  <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                    dfdffd
                                  </p>
                                </li>
                              </Link>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                              <li>
                                <p className="border-solid border-t-[2px] border-[#00a6ff43]">
                                  dfdffd
                                </p>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </Popup> */}
                    {/* 공지 사항 알리미 */}
                    <div className="absolute top-[0.45em] left-[3.5em] w-[55em] h-[3.2em] flex items-center">
                      <div className="">
                        <span className="text-[22px] font-Juas text-[#ffffffb9]">
                          금일 식사는 어디서 합니다.
                        </span>
                      </div>
                    </div>

                    {/* 헤더 사업 로고 */}
                    <div className="relative -top-[3.5em] -right-[86.7em] w-[14.3vw] h-[5.1vh] backdrop-blue-[10px]">
                      <div className="flex justify-end ">
                        <div className="border-[0.2em] rounded-full h-[5.7vh] border-[#e93c3c4b] shadow-lg shadow-[#e93c3ca5] ">
                          <Image
                            src={FishkingIcon}
                            alt="fishking"
                            height={50}
                            width={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="border-[0.2em] rounded-full h-[5.7vh] border-[#e93c3c4b] shadow-lg shadow-[#e93c3ca5] ">
                          <Image
                            src={SmartFishingIcon}
                            alt="smartfishing"
                            height={50}
                            width={50}
                            className="rounded-full "
                          />
                        </div>
                        <div className="border-[0.2em] rounded-full h-[5.7vh] border-[#e93c3c4b] shadow-lg shadow-[#e93c3ca5] ">
                          <Image
                            src={FishShopIcon}
                            alt="fishshop"
                            height={50}
                            width={50}
                            className="rounded-full "
                          />
                        </div>
                        <div className="border-[0.2em] rounded-full h-[5.7vh] border-[#e93c3c4b] shadow-lg shadow-[#e93c3ca5] ">
                          <Image
                            src={FishShipIcon}
                            alt="fishship"
                            height={50}
                            width={50}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 헤더 스핀 */}
            <div className="absolute w-[86.6vw] h-[10vh] left-[16em] top-[3.2em] rounded-l-lg ">
              <div className="relative top-[0.7em] left-[30em] h-[7vh] w-[40em] rounded-2xl shadow-2xl shadow-[#00f7ff5d]">
                <div className="text-center text-[44px] font-Nanums text-[#ffffffbc]">
                  낚싯대 수리하기
                </div>
              </div>
              {/* 헤더 알림 */}
              <div
                id="profile bell"
                className="absolute right-[9.5em] top-[0.8em] "
              >
                <button>
                  <span className="animate-ping absolute right-[11.4px] top-[14px] inline-flex h-[20%] w-[35%] rounded-full bg-[#1e44ff]" />
                  <span className="relative inline-flex top-[10px] rounded-full h-3 w-3 bg-[#87cfeb63]"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#87ebd28e"
                    className="w-9 h-9 stroke-2 hover:stroke-[#ffffffb6] focus:stroke-[#ffffffda]"
                  >
                    <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>
                </button>
              </div>
              {/* 헤더 프로필 */}
              <div
                id="profile image"
                className="absolute rounded-full left-[97em] top-[2.1em]"
              >
                <Popup
                  trigger={
                    <button className="" onClick={onClickMenu}>
                      <Image
                        src={`/../public/${data?.name}`}
                        alt="Profile"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </button>
                  }
                  modal
                >
                  <div>
                    <div>
                      {" "}
                      <div className="absolute -top-[21em] -right-[59.3em] bg-[#ffffff28] px-[30px] py-[20px] rounded-md backdrop-blur-[5px] outline outline-[2px] outline-[#0000ff6a]">
                        <div className="space-y-[1rem] flex flex-col text-center">
                          <div className="hover:text-[#ffffffbc]">
                            <Link href="/profileChange">
                              <button className="">
                                <span className="font-bold">프로필 편집</span>
                              </button>
                            </Link>
                          </div>
                          <div className="hover:text-[#ffffffbc]">
                            <Link href="/settings">
                              <button className="">
                                <span className="font-bold">설정</span>
                              </button>
                            </Link>
                          </div>
                          <div className="hover:text-[#ffffffbc]">
                            <button className="">
                              <span className="font-bold">로그아웃</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
              {/* {ProfileMenu ? <ProfileAccordion /> : ""} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;

const AccorSidebar = Styled.div`{
  animation-duration: 2s;
  animation-name: AccorSidebar;

  @keyframes AccorSidebar {
    from { 
    height: 200px
    }
  }
}


`;
