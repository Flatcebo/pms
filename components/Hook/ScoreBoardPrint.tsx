import useMutation from "@libs/client/useMutation";
import { Project, ToDoList, WorkList } from "@prisma/client";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface PrintProps {
  printRef: any;
  current: any;
}

interface ScoreDataProps {
  toDoList: {
    id: number;
    todayToDos: string;
    unToDos: string;
    nextToDos: string;
    map: any;
  };
}

interface ProjectDataProps {
  ok: string;
  projects: Project[];
}
interface WorkDataProps {
  ok: string;
  works: ToDoList[];
}

export default function ScoreBoardPrint(props: any) {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, setValue } = useForm();

  const { data: session } = useSession();
  const { data: scoreData, mutate: scoreDataMutate } = useSWR<ScoreDataProps>(
    startDate
      ? `/api/works?email=${session?.user?.email}&chooseDate=${startDate}`
      : null
  );

  const { data: workData, mutate: workDataMutate } =
    useSWR<WorkDataProps>(`/api/works`);

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
    <button
      onClick={onClickPrint}
      className="outline absolute right-[300px] top-[0px] px-6 py-6"
    >
      <ul ref={printRef}>
        {workData?.works.map(({ el }: any) => (
          <li key={el.id}>{el.todayToDos}dd</li>
        ))}
      </ul>
      인쇄
    </button>
  );
}
