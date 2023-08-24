import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Messenger = () => {
  const [messengerIcons, setMessengerIcons] = useState(false);
  const onClickHideMessenger = (e: React.MouseEvent<HTMLDivElement>) => {
    setMessengerIcons((any) => !any);
  };

  return (
    <div>
      {messengerIcons ? (
        <>
          <MessengerOpens className="absolute top-[0.5em] right-[15px] left-[1440px] h-[780px] w-[220px] bg-[#ffffff00] rounded-lg backdrop-blur-[3px] outline  outline-[#0000ff6a] ">
            <aside className="" onClick={onClickHideMessenger}>
              <h1 className="text-center text-[20px]">임원</h1>
              <button className="absolute -left-[2.2em] top-[20em] px-[0.5em] py-[0.5em] outline outline-[#0000ff6a] bg-[#0000ff29] text-[#ffffff] rounded-l-md hover:bg-[#0000ff48] hover:outline-[#0000ff7d] focus:bg-[#0000ff6f] focus:outline-[#0000ff9c]">
                <FaChevronRight />
              </button>
              <ul className="border">
                <li className="border">
                  <p className="flex justify-start">
                    {/* <Image
                          src={`/../public/${data?.name}`}
                          alt="Profile"
                          width={60}
                          height={60}
                          className="rounded-full"
                        /> */}
                    <span className="mt-4 ml-3 text-[18px]">태동이</span>
                  </p>
                </li>
                <li className="border">
                  {/* <Image
                      src={`/../public/${data?.name}`}
                      alt="Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    /> */}
                </li>
                <li>
                  {/* <Image
                      src={`/../public/${data?.name}`}
                      alt="Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    /> */}
                </li>
              </ul>
            </aside>
          </MessengerOpens>
        </>
      ) : (
        <>
          <MessengerOpens1 className="absolute top-5 right-[15px] left-[1460px] h-[760px] w-[200px] outline outline-[#0000ff8d] bg-[white] rounded-md ">
            <aside className="" onClick={onClickHideMessenger}>
              <h1 className="text-center text-[20px]">임원</h1>
              {/* <button className="absolute right-[1.0em] top-[21.2em] left-[1630px] px-[0.5em] py-[0.5em] outline outline-[#0000ff8d] bg-[#0000ff29] text-[#ffffff] rounded-l-md ">
                <FaChevronLeft />
              </button> */}
              <ul className="border">
                <li className="border">
                  <p className="flex justify-start">
                    {/* <Image
                            src={`/../public/${data?.name}`}
                            alt="Profile"
                            width={60}
                            height={60}
                            className="rounded-full"
                          /> */}
                    <span className="mt-4 ml-3 text-[18px]">태동이</span>
                  </p>
                </li>

                <li className="border">
                  {/* <Image
                        src={`/../public/${data?.name}`}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                      /> */}
                </li>
                <li>
                  {/* <Image
                        src={`/../public/${data?.name}`}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                      /> */}
                </li>
              </ul>
            </aside>
          </MessengerOpens1>
        </>
      )}
      {messengerIcons ? (
        <>
          <MessengerHides onClick={onClickHideMessenger}>
            <button className="absolute right-[1.0em] top-[21.2em] left-[1630px] px-[0.5em] py-[0.5em] outline outline-[#0000ff8d] bg-[#0000ff29] text-[#ffffff] rounded-l-md ">
              <FaChevronLeft />
            </button>
          </MessengerHides>
        </>
      ) : (
        <div onClick={onClickHideMessenger}>
          <button className="absolute right-[1.0em] top-[20.5em] left-[1628px] px-[0.5em] py-[0.5em] outline outline-[#0000ff8d] bg-[#0000ff29] text-[#ffffff] rounded-l-md hover:bg-[#0000ff48] hover:outline-[#0000ff7d] focus:bg-[#0000ff6f] focus:outline-[#0000ff9c]">
            <FaChevronLeft />
          </button>
        </div>
      )}
    </div>
  );
};

export default Messenger;

const MessengerOpens = styled.div`
  animation-duration: 1.3s;
  animation-name: MessengerOpens;

  @keyframes MessengerOpens {
    from {
      margin-left: 12.4%;
    }
    1% {
      margin-left: 12.4%;
    }
  }
`;

const MessengerOpens1 = styled.div`
  animation-duration: 1.3s;
  animation-name: MessengerOpens1;

  @media all and (min-width: 700px) {
    display: none;
    /* @keyframes MessengerOpens1 {
      from {
        margin-right: 14.4%;
      }
      5% {
        margin-right: 4%;
      }
    } */
  }
`;

const MessengerHides = styled.div`
  animation-duration: 1.3s;
  animation-name: MessengerHides;

  /* @keyframes MessengerHides {
    from {
    }
    5% {
    }
  } */
  @media all and (min-width: 700px) {
    display: none;
  }
`;
