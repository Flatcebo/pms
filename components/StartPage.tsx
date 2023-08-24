// auto login setting
// enter password missing

import Image from "next/image";
import headerMark from "@public/headerMark.png";
import SKbroadbandLogo from "@public/SKbroadbandLogo.png";
import SKtelecomLogo from "@public/SKtelecomLogo.png";
import NHNLogo from "@public/NHNLogo.png";
import React, { useState, useEffect } from "react";
import LoginAccordion from "./LoginAccordion";
import styled, { keyframes } from "styled-components";

// type Props = {
//   number: string;
// };

export default function StartPage() {
  const [LoginInput, setLoginInput] = useState(false);

  const onToggleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoginInput((any) => !any);

    // return (
    //   <div>
    //     <div>
    //       <input type="text" name="ID" placeholder="Enter ID"></input>
    //       <input
    //         type="text"
    //         name="PASSWORD"
    //         placeholder="Enter PASSWORD"
    //       ></input>
    //     </div>
    //   </div>
    // );
  };

  return (
    <div
      className="absolute w-full h-full bg-gradient-to-b from-[#b6173e] via-[#cd682ed3] to-blue-500 

    overflow-hidden "
    >
      <SlideIn1>
        {/* via-[#e59595] */}
        <div className="flex justify-center mt-[48px] ">
          <div className="flex text-center mt-[48px] ">
            <Image
              className=""
              src={headerMark}
              alt="LOGO"
              //   layout="responsive"
              //   sizes="(max-width: 768px) 100vw,
              // (max-width: 1200px) 50vw,33vw"
            />
          </div>
        </div>
      </SlideIn1>
      <div className="flex justify-center mt-[56px]">
        <div className="flex text-center mt-[56px]">
          <span className=" w-[10rem] flex justify-center ">
            <HiddenMenu>
              <button
                className="flex w-full justify-center "
                onClick={onToggleInput}
              >
                <a className="text-[#e55d5def] font-bold text-3xl w-15 hover:text-[#ffffff1e] animate-bounce ">
                  {/* #9fafec */}
                  로그인
                </a>
              </button>
            </HiddenMenu>
          </span>
        </div>
      </div>

      <div>{LoginInput ? <LoginAccordion /> : ""}</div>
      <SlideIn2>
        <div className=" justify-center mt-[9rem] text-[2.5rem] text-[white] ">
          <div className="flex justify-center ">
            <p className="mr-3 text-[3rem]">바다와 정보를 </p>
            <p className="font-bold text-[3rem]">연결하다</p>
          </div>
          <div className="flex justify-center">
            <p className="text-[13px]">
              바다를 사랑하는 사람들과 바다를 그리워하는 모든 사람들에게
            </p>
          </div>
          <div className="flex justify-center mb-[8rem] pb-[4rem]">
            <p className="text-[13px] font-bold">더욱 가치있는 정보를 제공</p>
            <p className="text-[13px]">하고자 노력합니다.</p>
          </div>
        </div>
      </SlideIn2>
      <footer className="block h-[rem] ">
        <ul className="flex justify-around ">
          <SlideIcon1>
            <li>
              <Image src={SKtelecomLogo} width={85} height={36} alt="SKTLOGO" />
            </li>
          </SlideIcon1>
          <SlideIcon2>
            <li>
              <Image src={NHNLogo} width={120} height={33} alt="NHNLOGO" />
            </li>
          </SlideIcon2>
          <SlideIcon3>
            <li>
              <Image src={SKbroadbandLogo} alt="SKBLOGO" />
            </li>
          </SlideIcon3>
        </ul>
      </footer>
    </div>
  );
}

const SlideIn1 = styled.div`
  animation-duration: 3s;
  animation-name: SlideIn1;

  @keyframes SlideIn1 {
    from {
      margin-left: 100%;
    }
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
  }
`;
const SlideIn2 = styled.div`
  animation-duration: 3s;
  animation-name: SlideIn2;

  @keyframes SlideIn2 {
    from {
      margin-right: 70%;
      margin-bottom: 100%;
    }
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
  }
`;
const SlideIcon1 = styled.div`
  animation-duration: 3.5s;
  animation-name: SlideIcon1;

  @keyframes SlideIcon1 {
    from {
      margin-top: 100%;
    }
    80% {
      opacity: 0.05;
    }
  }
`;
const SlideIcon2 = styled.div`
  animation-duration: 5.5s;
  animation-name: SlideIcon2;

  @keyframes SlideIcon2 {
    from {
      margin-top: 100%;
    }
    80% {
      opacity: 0.05;
    }
  }
`;
const SlideIcon3 = styled.div`
  animation-duration: 4.3s;
  animation-name: SlideIcon3;

  @keyframes SlideIcon3 {
    from {
      margin-top: 100%;
    }
    80% {
      opacity: 0.05;
    }
  }
`;
const HiddenMenu = styled.div`
  animation-duration: 6s;
  animation-name: HiddenMenu;

  @keyframes HiddenMenu {
    from {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    95% {
      opacity: 0.01;
    }
  }
`;
