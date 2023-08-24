// 시작일시는 캘린더 DB연동하기
// Popup 컴포넌트에서 에러 발생함.
// 진행자,참여자 클릭시 색 바꿀수 있는 이벤트 주기

import React, { useCallback, useEffect, useRef, useState } from "react";
import PageLayout from "@components/PageLayout";
import ProgressBar from "@ramonak/react-progress-bar";
import ChartDoghnut, { data } from "@components/ChartDoughnut";
import ChartLine from "@components/ChartLine";
import { MdAdd } from "react-icons/md";
import Popup from "reactjs-popup";
import DatePicker, {
  CalendarContainerProps,
  registerLocale,
} from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import { FaChevronRight, FaLuggageCart, FaThList } from "react-icons/fa";
import styled from "styled-components";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import cn from "classnames";
import { render } from "react-dom";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import Messenger from "@components/Messenger";
import useMutation from "@libs/client/useMutation";
import project from "./api/project";
import useSWR from "swr";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);
import { Project, User } from "@prisma/client";

interface ProjectsResponse {
  ok: boolean;
  projects: Project[];
  users: User[];
}

const Project = ({}) => {
  const { data, mutate } = useSWR<ProjectsResponse>("/api/project");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  interface ProjectForm {
    projectName: string;
    startDate: Date;
    endDate: Date;
  }

  const MyContainer = ({ className, children }: CalendarContainerProps) => {
    return (
      <div style={{ padding: "16px", background: "#216ca585", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const [
    createProject,
    { loading: createLoading, data: createProjectData, error: createError },
  ] = useMutation(`/api/project`);

  const { register, handleSubmit } = useForm<ProjectForm>();

  const onValid = async (validForm: ProjectForm) => {
    validForm.startDate = startDate;
    validForm.endDate = endDate;

    createProject(validForm);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="absolute h-full w-full overflow-scroll scrollbar-hide">
      <PageLayout />
      <div className="absolute top-[10.2em] w-[87.5vw] h-[83vh] left-[15.5rem] font-Nanums font-[700] rounded-l-lg">
        <div className="absolute h-[83vh] w-full left-[5px] bg-[#ffffff00]  ">
          {/* 프로젝트 리스트 */}
          <div className="absolute top-[30px] left-[15px] h-[76vh] w-[200px] outline text-center outline-[#b6173f68] rounded-md bg-[white]">
            <h1 className="text-[24px] outline outline-[#b6173f68] rounded-md ">
              PROJECT LIST
            </h1>

            <ul className="text-[18px] leading-10 ">
              {data?.projects?.map(project => (
                <li
                  className="border-t-[3px] border-solid border-[#b6173f34]"
                  key={project.id}
                >
                  <button>{project.name}</button>
                </li>
              ))}
              <li className="border-t-[3px] border-solid border-[#b6173f34]">
                <Popup
                  trigger={
                    <button className="button pt-[7px] pb-[14px] px-[90px] ">
                      <MdAdd />
                    </button>
                  }
                  modal
                >
                  <div className="absolute -top-[295px] -left-[487px] backdrop-blur-[4px] ">
                    <div className="flex border-x-[500px] border-y-[330px] rounded-xl border-[#5f17b637] ">
                      <form onSubmit={handleSubmit(onValid)}>
                        <div className="absolute top-[20px] right-[410px] ">
                          <div>
                            <button className="absolute top-[10px] -left-[380px] px-[10px] bg-[#1b2aaf27] text-[18px] text-[#ff000070] font-semibold outline outline-[#5f17b637] rounded-md hover:bg-[#0004ff48] hover:text-[#ff0000b0]">
                              취소
                            </button>
                          </div>
                          <h1 className="text-[32px] font-bold text-[#1b2aafdd] ">
                            프로젝트 추가
                          </h1>
                          <div>
                            <button
                              type="submit"
                              className="absolute top-[10px] -right-[370px] px-[10px] bg-[#1b2aaf27] text-[18px] text-[#1b74afa7] font-semibold outline outline-[#5f17b637] rounded-md hover:bg-[#0004ff48] hover:text-[#1b74afe9]"
                              // onClick={onClick}
                            >
                              추가
                            </button>
                          </div>
                        </div>
                        <div className="">
                          <div className="absolute top-[110px] left-[50px]">
                            <span className="text-[20px] font-semibold text-[#1b2aafdd] before:content-['*'] before:text-red-500">
                              프로젝트명
                            </span>

                            <input
                              {...register("projectName")}
                              type="text"
                              name="projectName"
                              placeholder="NAME"
                              className="px-[15px] py-[15px] ml-[20px] bg-[#1b2aaf27] text-[black] text-[18px] outline outline-[#5f17b637] rounded-md "
                              // onChange={onChangeNames}
                              required
                            />
                          </div>
                          <div className="absolute top-[120px] left-[500px] h-[150px] w-[400px] ">
                            <span className="text-[20px] font-semibold text-[#1b2aafdd] ml-[10px] before:content-['*'] before:text-red-500">
                              프로젝트 기간
                            </span>

                            <div className="absolute top-[1px] left-[130px] ">
                              <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={startDate}
                                // isClearable
                                selectsStart
                                onChange={(date: Date) => setStartDate(date)}
                                minDate={startDate}
                                locale="ko"
                                // calendarContainer={MyContainer}
                                required
                                className="text-center bg-[#1b2aaf27] hover:bg-[#5f17b637] w-[100px] text-[18px] ml-[20px] outline outline-[#5f17b637] rounded-md"
                              />
                            </div>
                            <div className="absolute -top-[6px] right-[117.5px]">
                              <span className="text-[25px] font-semibold text-[#1b2aafdd]">
                                ~
                              </span>
                            </div>
                            <div className="absolute top-[1px] right-[0px]">
                              <DatePicker
                                dateFormat="yyyy/MM/dd"
                                selected={endDate}
                                selectsEnd
                                onChange={(date: Date) => setEndDate(date)}
                                className="text-center bg-[#1b2aaf27] hover:bg-[#5f17b637] w-[100px] text-[18px] outline outline-[#5f17b637] rounded-md"
                                locale="ko"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[420px] left-[150px]">
                          {/* <button
                            className="px-[15px] py-[0px] mr-[7px] text-[12px] text-[white] bg-[#ff000095] outline outline-[#1b2aafdd] rounded-md "
                            onClick={onChangeMode}
                            Click!
                          >
                          </button> */}
                          <div
                          // className={cn("checkbox", { checked })}
                          // onClick={onChangeChecked}
                          >
                            {/* {checked ? (
                              <MdCheckBox />
                            ) : (
                              <MdCheckBoxOutlineBlank />
                            )} */}
                          </div>
                          <span className="text-[16px] font-semibold text-[#1b2aafdd]">
                            <span className="after:content-['*'] after:text-red-500">
                              진행자
                            </span>
                          </span>
                        </div>
                        <div className="absolute bottom-[420px] left-[310px]">
                          {/* <button className="px-[15px] py-[0px] mr-[7px] text-[12px] text-[white] bg-[#ffff0091] outline outline-[#1b2aafdd] rounded-md ">
                            Click!
                          </button> */}
                          <span className="text-[16px] font-semibold text-[#1b2aafdd]">
                            <span className="after:content-['*'] after:text-red-500">
                              참여자
                            </span>
                          </span>
                        </div>
                        <div className="absolute top-[260px] left-[30px] w-[937px] h-[370px] ">
                          <div className="absolute w-[150px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              임원
                            </h1>

                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li className="hover:bg-[#1b2aaf25]">
                                  <button className="">ㅇㅇㅇ 대표</button>
                                </li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16]">
                                  <button>ㅁㅁㅁ 이사</button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="absolute left-[157px] w-[150px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              관리직
                            </h1>
                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center  ">
                                <li>ㅇㅇㅇ 과장</li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16]">
                                  ㅁㅁㅁ 대리
                                </li>
                              </ul>
                            </div>
                          </div>{" "}
                          <div className="absolute left-[314px] w-[150px] h-[370px]">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              일반직
                            </h1>
                            <div className="absolute -bottom-[5px] w-[150px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li>ㅇㅇㅇ 사원</li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16]">
                                  ㅁㅁㅁ 주임
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="absolute top-[150px] right-[310px]">
                            <FaChevronRight size="48px" color="#1b2aafa1" />
                          </div>
                          <div className="absolute right-[0px] w-[200px] h-[370px] ">
                            <h1 className="text-[18px] text-center text-[#1b2aafdd] font-semibold bg-[#1b2aaf27] outline outline-[#5f17b637] rounded-md">
                              선택 완료
                            </h1>
                            <div className="absolute -bottom-[5px] w-[200px] h-[340px] bg-[#1b2aaf16] outline outline-[#5f17b637] rounded-md overflow-y-scroll scrollbar-hide">
                              <ul className="text-center">
                                <li>ㅇㅇㅇ 사원</li>
                                <li className="border-t-[2px] border-solid border-[#1b2aaf16]">
                                  ㅁㅁㅁ 주임
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Popup>
              </li>
              {/* {data?.projects?.map(item => {
                return (
                  <li
                    className="border-t-[3px] border-solid border-[#b6173f34]"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                );
              })} */}
            </ul>
          </div>
          <div className="absolute top-[30px] h-[93%] w-[1420px] left-[230px] ">
            <div className="inline-block h-[98.3%] w-[400px] bg-[white]">
              <div className="h-[515px] w-[400px] outline outline-[#b6173f68] rounded-md">
                <h1 className="text-center text-[28px]">MAIN CHART</h1>
                <ChartDoghnut />
              </div>
              <div className="absolute bottom-[12px] h-[260px] w-[400px] outline outline-[#b6173f68] rounded-md">
                <h1 className="text-[28px] text-center -mt-[2.5px]">
                  LINE CHART
                </h1>
                <ChartLine />
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className="absolute top-0 left-[420px] h-[98%] w-[1000px] outline outline-[#b6173f68] bg-[white] rounded-md">
                <div className="inline-block h-[100%] w-[150px] outline outline-[#b6173f68] rounded-md text-center">
                  <h1 className="text-[20px]">People LIST</h1>

                  <ul className="text-[18px] leading-[3.8rem]">
                    {data?.users?.map(user => (
                      <li className="" key={user.id}>
                        {user.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute h-[100%] w-[830px] top-[0px] right-[0px] text-center leading-[3rem]">
                  <h1 className="mb-1 text-[20px]">PERSONAL CHART</h1>
                  <div className="">
                    <ProgressBar
                      className=""
                      completed={100}
                      width="100%"
                      bgColor="#6ff06c"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Messenger /> */}
      </div>
    </div>
  );
};

export default React.memo(Project);
