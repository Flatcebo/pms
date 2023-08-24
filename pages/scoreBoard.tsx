// *********************************************************************************12.14(수) 업무일지 저장 안되는 버그 발생 *************************************************************************************************************

import PageLayout from "@components/PageLayout";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Popup from "reactjs-popup";
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useSession } from "next-auth/react";
import useSWR from "swr";

import "react-datepicker/dist/react-datepicker.css";
import Messenger from "@components/Messenger";
import { Project, ToDoList } from "@prisma/client";
import ScoreBoardPrint from "@components/Hook/ScoreBoardPrint";

const data = [
  {
    id: "1",
    value: "PMS",
  },
  {
    id: "2",
    value: "APP",
  },
];

interface ScoreDataProps {
  toDoList: {
    id: number;
    todayToDos: string;
    unToDos: string;
    nextToDos: string;
  };
}

interface ProjectDataProps {
  ok: string;
  projects: Project[];
}

const ScoreBoard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, setValue } = useForm();

  const { data: session } = useSession();
  const { data: scoreData, mutate: scoreDataMutate } = useSWR<ScoreDataProps>(
    startDate
      ? `/api/works?email=${session?.user?.email}&chooseDate=${startDate}`
      : null
  );

  const { data: projectData, mutate: projectDataMutate } =
    useSWR<ProjectDataProps>(`/api/project`);

  const [
    createWorks,
    { loading: createLoading, data: createData, error: createError },
  ] = useMutation(`/api/works`);

  const onValid = (data: any) => {
    data.id = scoreData?.toDoList.id;
    data.email = session?.user?.email;
    data.chooseDate = startDate;
    createWorks(data);
  };

  const onChangeProjects = (date: any) => {
    setStartDate(date);
  };

  const setPrevDate = () => {
    const nextDay = new Date(startDate.setDate(startDate.getDate() - 1));
    setStartDate(nextDay);
  };

  const setNextDate = () => {
    const nextDay = new Date(startDate.setDate(startDate.getDate() + 1));
    setStartDate(nextDay);
  };

  const onClickBtn = (e: React.MouseEvent<HTMLInputElement>) => {};

  useEffect(() => {
    setValue("todayToDos", scoreData?.toDoList.todayToDos);
    setValue("unToDos", scoreData?.toDoList.unToDos);
    setValue("nextToDos", scoreData?.toDoList.nextToDos);
  }, [scoreData, setValue]);

  useEffect(() => {
    if (createData?.error) {
      alert(createData?.error);
    }
  }, [createData]);

  const printRef: any = useRef(null);

  const onClickPrint = () => {
    let printContent = printRef.current.innerHTML;
    let originalContent = document.body.innerHTML;
    console.log(printContent, originalContent);
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    history.go(0);
  };

  return (
    <div className="absolute h-full w-full bg-[#9a9a9a4b]">
      <PageLayout />
      <form onSubmit={handleSubmit(onValid)}>
        <div className="absolute w-[87.5vw] h-[83vh] left-[15rem] top-[10.2em] font-Nanum-Gothic overflow-scroll scrollbar-hide ">
          <div className="absolute inset-0 h-[795px] w-[88%]">
            <div className="absolute top-[8px] left-[13px] h-[70px] w-[84.8vw] outline outline-[#0000ff6a] rounded-md bg-[white] shadow-lg shadow-[##1d1c1cdc]">
              <div className="w-[100%] h-5 " />
              <div className="flex w-[100%] justify-center ">
                <div className="flex justify-between items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 cursor-pointer "
                    onClick={setPrevDate}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <DatePicker
                    className="border-0 bg-transparent text-xl w-full focus:border-current focus:ring-0 focus:outline-none text-center mb-[0.5rem]"
                    selected={startDate}
                    dateFormat="dd (eee)"
                    locale={ko}
                    onChange={onChangeProjects}
                  />
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
              </div>

              <Popup
                trigger={
                  <ProjectShoot>
                    <input
                      type="button"
                      className="button absolute top-[18px] right-[110px] px-[20px] pt-[3px] text-[20px] outline outline-[#5417b698] bg-[#5417b660]
                       text-[white] rounded-full font-semibold tracking-[2px] hover:bg-[#5417b680] hover:outline-[#5417b6dd] hover:text-[#ffffff8a] focus:text-[#ffffffcf]"
                      value="PROJECT"
                      onClick={onClickBtn}
                    />
                  </ProjectShoot>
                }
                modal
                nested
              >
                <div className="absolute w-[400px] -top-[18rem] outline bg-[#5417b634]">
                  <ul className="h-10 w-16 overflow-y-scroll flex items-center flex-col">
                    {projectData?.projects.map((item, index) => (
                      <li className="list-none  text-xl" key={item.id}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute -top-[302px] -left-[10px] border border-x-[300px] border-y-[30px] border-[#5417b634] outline outline-[#5417b658] rounded-md ">
                  <div className="absolute h-10 -top-[30px] -left-[250px] text-[30px] over">
                    <div className="tracking-[3px] text-[24px] font-semibold uppercase"></div>
                    <div className="absolute top-[0px] left-[170px]">
                      <ProgressBar1>
                        <ProgressBar
                          className="rounded-none"
                          completed={100}
                          width="380px"
                          height="60px"
                          bgColor="#5417b66f"
                          borderRadius="6px"
                        />
                      </ProgressBar1>
                    </div>
                  </div>
                </div>
              </Popup>
              {/* <ScoreBoardPrint /> */}
              <button
                onClick={onClickPrint}
                className="outline absolute right-[300px] top-[0px] px-6 py-6"
              >
                인쇄
                <ul ref={printRef}>
                  <li {...register("todayToDos")} />
                  <li {...register("unToDos")} />
                </ul>
              </button>
              <button className="button absolute top-[18px] right-[20px] px-[20px] pt-[3px] text-[20px] outline outline-[#5417b698] bg-[#5417b660] text-[white] rounded-full font-semibold tracking-[2px] hover:bg-[#5417b680] hover:outline-[#5417b6dd] hover:text-[#ffffff8a] focus:text-[#ffffffcf]">
                저장
              </button>
            </div>
            <div className="relative top-[90px] h-[300px] w-full left-3 ">
              <h1
                className="absolute px-[30px] py-[79px] outline outline-[#1d1d1d6a] rounded-md text-[22px] leading-[26px] bg-[white] 
              shadow-lg shadow-[#1d1c1cdc]"
              >
                <p>처</p>
                <p>리</p>
                <p>업</p>
                <p>무</p>
              </h1>

              <TextareaAutosize
                {...register("todayToDos")}
                className="absolute left-[93px] outline outline-[#0000ff6a] rounded-md text-[20px] text-opacity-40 text-center shadow-lg
                shadow-[#1d1c1cdc] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[white]"
                style={{
                  boxSizing: "border-box",
                  width: "80vw",
                  resize: "none",
                }}
                minRows={8.7}
                maxRows={8.7}
                placeholder="MEMO"
              ></TextareaAutosize>
            </div>
            <div className="absolute top-[370px] h-[100px] w-full left-3">
              <h1 className="absolute px-[30px] py-[5px] outline outline-[#0000ff6a] rounded-md text-[22px] leading-[26px] bg-[white] shadow-lg shadow-[#1d1c1cdc]">
                <p>미</p>
                <p>처</p>
                <p>리</p>
                <p>업</p>
                <p>무</p>
              </h1>
              <TextareaAutosize
                {...register("unToDos")}
                className="absolute left-[93px] outline outline-[#0000ff6a] rounded-md text-[20px] text-opacity-40 text-center shadow-lg
                shadow-[#1d1c1cdc] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[white]"
                style={{
                  boxSizing: "border-box",
                  width: "80vw",
                  resize: "none",
                }}
                minRows={4.7}
                maxRows={4.7}
                placeholder="MEMO"
              />
            </div>
            <div className="absolute top-[530px] h-[250px] w-full left-3">
              <h1 className="absolute px-[30px] py-[46px] outline outline-[#0000ff6a] rounded-md text-[22px] leading-[26px] bg-[white] shadow-lg shadow-[#1d1c1cdc]">
                <p>진</p>
                <p>행</p>
                <p>예</p>
                <p>정</p>
                <p>업</p>
                <p>무</p>
              </h1>
              <TextareaAutosize
                {...register("nextToDos")}
                className="absolute left-[93px] outline outline-[#0000ff6a] rounded-md text-[20px] text-center text-opacity-40 shadow-lg
                shadow-[#1d1c1cdc] hover:outline-[#ff00003c] hover:ring-[5px] hover:ring-[white]"
                style={{
                  boxSizing: "border-box",
                  width: "80vw",
                  resize: "none",
                }}
                minRows={8.2}
                maxRows={8.2}
                placeholder="MEMO"
              />
              {/* </div> */}
            </div>
          </div>
          {/* <Messenger /> */}
        </div>
      </form>
    </div>
  );
};

const ProjectShoot = styled.div`
  animation-duration: 3s;
  animation-name: ProjectShoot;

  @keyframes ProjectShoot {
    from {
      margin-top: 100%;
      margin-left: 70%;
    }
  }
`;

const ProgressBar1 = styled.div`
  animation-duration: 3s;
  animation-name: ProgressBar1;

  @keyframes ProgressBar1 {
    from {
      margin-top: 0;
    }
  }
`;

export default ScoreBoard;
