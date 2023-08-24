import Calendar from "@toast-ui/react-calendar";
import useSWR from "swr";
import { Project } from "@prisma/client";
import { useRef, useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import { className } from "@libs/client/utils";
import { useForm, Controller } from "react-hook-form";
import Input from "@components/Input";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { useSession } from "next-auth/react";

import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "react-datepicker/dist/react-datepicker.css";

interface ProjectProps {
  projects: Project[];
}

const Calendars = ({ height }: any) => {
  const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [choiceStartTime, setChoiceStartTime] = useState("오전 09:00");
  const [isOpenStartTime, setIsOpenStartTime] = useState(false);
  const [choiceEndTime, setChoiceEndTime] = useState("오전 10:00");
  const [isOpenEndTime, setIsOpenEndTime] = useState(false);

  const times = [] as any;

  let minutes = 0;
  for (let i = 0; i < 24; i++) {
    const hours = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
      i,
      0,
      0
    ).getHours();

    for (let i = 0; i < 2; i++) {
      minutes = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        i,
        i % 2 == 0 ? 0 : 30,
        0
      ).getMinutes();
      times.push(
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          hours,
          minutes
        )
      );
    }
  }

  const { data, mutate } = useSWR<ProjectProps>(`/api/schedules`);

  const [
    createSchedule,
    { loading: createLoading, data: createScheduleData, error: createError },
  ] = useMutation(`/api/schedules/create`);

  const [
    updateSchedule,
    { loading: updateLoading, data: updateScheduleData, error: updateError },
  ] = useMutation(`/api/schedules/update`);

  const [
    deleteSchedule,
    { loading: deleteLoading, data: deleteScheduleData, error: deleteError },
  ] = useMutation(`/api/schedules/delete`);

  const calRef = useRef<any>(null);

  const selectStartDate = (date: any) => {
    setStartDate(date);
  };

  const selectEndDate = (date: any) => {
    setEndDate(date);
  };

  const projectSchedule = data?.projects?.map((item, index) => {
    return Object.assign({
      title: item.name,
      body: item.comment,
      start: item.startedAt,
      end: item.finishedAt,
      id: item.id,
      calendarId: item.id,
      backgroundColor: "#000001",
      color: "#fff",
      category: item.isAllDay === "Y" ? "allday" : "time",
    });
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const clickDayName = (event: any) => {
    setIsOpenUser(!isOpenUser);
    setStartDate(event.start);
    setEndDate(event.end);

    const startDateOffset = event.start.getTimezoneOffset() * 60000;
    const endDateOffset = event.end.getTimezoneOffset() * 60000;
    const startDate = new Date(event.start.getTime() - startDateOffset);
    const endDate = new Date(event.end.getTime() - endDateOffset);

    setValue(
      "startDate",
      startDate.toISOString().replace("T", " ").substring(0, 19)
    );
    setValue(
      "endDate",
      endDate.toISOString().replace("T", " ").substring(0, 19)
    );
    setValue("startTime", "09:00");
    setValue("endTime", "10:00");
  };

  const onAfterRenderEvent = (event: any) => {};

  const onBeforeDeleteEvent = (items: any) => {
    deleteSchedule({ id: items.id });
  };

  const onBeforeUpdateEvent = (items: any) => {
    updateSchedule({
      id: items.event.id,
      title: items.changes.title,
      startDate: items.changes?.start?.d.d
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
      endDate: items.changes?.end?.d.d
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
      beforeTitle: items.event.title,
      beforeStartDate: items.event.start.d.d
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
      beforeEndDate: items.event.end.d.d
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
    });
  };

  const onBeforeCreateEvent = (items: any) => {
    createSchedule({
      items: items,
      startDate: items.start.d.d
        .toISOString()
        .replace("T", " ")
        .substring(0, 19),
      endDate: items.end.d.d.toISOString().replace("T", " ").substring(0, 19),
    });
  };

  const onClickEvent = (data: any) => {};

  const closeDateTime = () => {
    calRef.current.getInstance().clearGridSelections();
    setIsOpenStartTime(false);
    setIsOpenUser(!isOpenUser);
  };

  const registerSchedule = (item: any) => {
    item.email = session?.user?.email;
    console.log(item);
    createSchedule(item);
  };

  const clickStartTime = () => {
    setIsOpenStartTime(current => !current);
    console.log(isOpenStartTime);
  };

  const clickEndTime = () => {
    setIsOpenEndTime(current => !current);
    console.log(isOpenEndTime);
  };

  useEffect(() => {
    if (!createLoading && createScheduleData) {
      mutate();
    }
  }, [createLoading, createScheduleData, mutate]);

  useEffect(() => {
    if (!updateLoading && updateScheduleData) {
      mutate();
    }
  }, [updateLoading, updateScheduleData, mutate]);

  useEffect(() => {
    if (!deleteLoading && deleteScheduleData) {
      mutate();
    }
  }, [deleteLoading, deleteScheduleData, mutate]);

  const { data: session } = useSession();

  const selectStartDateList = (
    ampm: any,
    hours: any,
    minutes: any,
    tHours: any,
    tMinutes: any
  ) => {
    const times = `${ampm} ${hours}:${minutes}`;
    setChoiceStartTime(times);
    setIsOpenStartTime(current => !current);

    if (tHours < 10) {
      tHours = "0" + tHours;
    }

    if (tMinutes < 10) {
      tMinutes = "0" + tMinutes;
    }

    const startTime = `${tHours}:${tMinutes}`;

    console.log(startTime);
    setValue("startTime", startTime);
  };

  const selectEndDateList = (
    ampm: any,
    hours: any,
    minutes: any,
    tHours: any,
    tMinutes: any
  ) => {
    const times = `${ampm} ${hours}:${minutes}`;
    setChoiceEndTime(times);
    setIsOpenEndTime(current => !current);

    if (tHours < 10) {
      tHours = "0" + tHours;
    }

    if (tMinutes < 10) {
      tMinutes = "0" + tMinutes;
    }

    const endTime = `${tHours}:${tMinutes}`;

    setValue("endTime", endTime);
  };

  return (
    <>
      <Calendar
        ref={calRef}
        calendars={[
          {
            id: "0",
            name: "Private",
            backgroundColor: "#9e5fff",
            borderColor: "#9e5fff",
          },
          {
            id: "1",
            name: "Company",
            backgroundColor: "#00a9ff",
            borderColor: "#00a9ff",
          },
        ]}
        height={height}
        week={{
          dayNames: ["일", "월", "화", "수", "목", "금", "토"],
          showTimezoneCollapseButton: true,
          timezonesCollapsed: true,
        }}
        view={"month"}
        month={{
          dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        }}
        events={projectSchedule}
        onAfterRenderEvent={onAfterRenderEvent}
        onClickEvent={onClickEvent}
        onBeforeDeleteEvent={onBeforeDeleteEvent}
        onBeforeUpdateEvent={onBeforeUpdateEvent}
        onBeforeCreateEvent={onBeforeCreateEvent}
        onSelectDateTime={clickDayName}
      />
      <div
        id="authentication-modal"
        aria-hidden="true"
        className={className(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
          isOpenUser ? "" : "hidden"
        )}
      >
        <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="authentication-modal"
              onClick={closeDateTime}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                일정 등록
              </h3>
            </div>

            <div className="">
              <form
                className="flex flex-col items-center space-y-6 max-w-xl m-auto"
                onSubmit={handleSubmit(registerSchedule)}
              >
                <div className="flex flex-col justify-center w-full">
                  <Input
                    register={register("title", { required: true })}
                    type="text"
                    label="일정 제목"
                    name="title"
                    placeholder="일정 제목"
                  />
                  <Input
                    register={register("contents", { required: true })}
                    type="text"
                    label="일정 내용"
                    name="contents"
                    placeholder="일정 내용"
                  />
                  <Input
                    register={register("location", { required: true })}
                    type="text"
                    label="장소"
                    name="location"
                    placeholder="장소"
                  />
                  <div className="flex justify-between items-center">
                    <Controller
                      render={({ field: { onChange } }) => (
                        <div className="flex">
                          <div className="border px-2 py-2 rounded-md">
                            <DatePicker
                              className="bg-transparent text-sm focus:border-current focus:ring-0 focus:outline-none text-center"
                              selected={startDate}
                              dateFormat="yyyy-MM-dd (eee)"
                              locale={ko}
                              onChange={(value, dateString) => {
                                const startDateOffset =
                                  value!.getTimezoneOffset() * 60000;
                                const startDate = new Date(
                                  value!.getTime() - startDateOffset
                                );

                                selectStartDate(value);

                                setValue(
                                  "startDate",
                                  startDate
                                    ?.toISOString()
                                    .replace("T", " ")
                                    .substring(0, 19)
                                );
                              }}
                            />
                          </div>
                          <div>
                            <div className="border ml-2 px-2 py-2 rounded-md hover:bg-slate-200">
                              <input
                                type="button"
                                value={choiceStartTime}
                                onClick={clickStartTime}
                                className="text-sm cursor-pointer"
                              />
                            </div>
                            <div
                              className={className(
                                "absolute border ml-2 mt-2 rounded-md bg-white max-h-48 overflow-auto z-[100] min-w-[160px]",
                                isOpenStartTime ? "" : "hidden"
                              )}
                            >
                              <ul>
                                {times.map((item: any, index: any) => {
                                  let tHours = item.getHours();
                                  let tMinutes = item.getMinutes() as any;
                                  let hours = item.getHours();
                                  let minutes = item.getMinutes() as any;
                                  let ampm = hours >= 12 ? "오후" : "오전";

                                  hours = hours % 12;
                                  hours = hours ? hours : 12;
                                  hours = hours < 10 ? "0" + hours : hours;
                                  minutes =
                                    minutes < 10 ? "0" + minutes : minutes;

                                  return (
                                    <li
                                      key={index}
                                      className="hover:bg-slate-200 cursor-pointer"
                                      onClick={() => {
                                        selectStartDateList(
                                          ampm,
                                          hours,
                                          minutes,
                                          tHours,
                                          tMinutes
                                        );
                                      }}
                                    >
                                      <a className="pl-2">
                                        <span className="text-sm">
                                          {`${ampm} ${hours}:${minutes}`}
                                        </span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>

                              {/* <ul>
                                {timeList &&
                                  timeList.map((item, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="hover:bg-slate-200 cursor-pointer"
                                        onClick={() => {
                                          setChoiceStartTime(item);
                                          setChoiceEndTime(timeList[index + 2]);
                                          setIsOpenStartTime(
                                            (current) => !current
                                          );
                                          setValue("startTime", item);
                                        }}
                                      >
                                        <a className="pl-2">
                                          <span className="text-sm">
                                            {item}
                                          </span>
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      )}
                      control={control}
                      name="startDate"
                    />
                    <span className="px-2 py-2"> - </span>
                    <Controller
                      render={({ field: { onChange } }) => (
                        <div className="flex">
                          <div className="border px-2 py-2 rounded-md">
                            <DatePicker
                              className="bg-transparent text-sm w-full focus:border-current focus:ring-0 focus:outline-none text-center"
                              selected={endDate}
                              dateFormat="yyyy-MM-dd (eee)"
                              locale={ko}
                              onChange={(value, dateString) => {
                                const endDateOffset =
                                  value!.getTimezoneOffset() * 60000;
                                const endDate = new Date(
                                  value!.getTime() - endDateOffset
                                );

                                selectEndDate(value);
                                setValue(
                                  "endDate",
                                  endDate
                                    ?.toISOString()
                                    .replace("T", " ")
                                    .substring(0, 19)
                                );
                              }}
                            />
                          </div>
                          <div>
                            <div className="border ml-2 px-2 py-2 rounded-md cursor-pointer">
                              <input
                                type="button"
                                value={choiceEndTime}
                                onClick={clickEndTime}
                                className="text-sm"
                              />
                            </div>
                            <div
                              className={className(
                                "absolute border ml-2 mt-2 pl-2 pr-14 py-2 rounded-md bg-white max-h-48 overflow-auto",
                                isOpenEndTime ? "" : "hidden"
                              )}
                            >
                              <ul>
                                {times.map((item: any, index: any) => {
                                  let tHours = item.getHours();
                                  let tMinutes = item.getMinutes() as any;
                                  let hours = item.getHours();
                                  let minutes = item.getMinutes() as any;
                                  let ampm = hours >= 12 ? "오후" : "오전";

                                  hours = hours % 12;
                                  hours = hours ? hours : 12;
                                  hours = hours < 10 ? "0" + hours : hours;
                                  minutes =
                                    minutes < 10 ? "0" + minutes : minutes;

                                  return (
                                    <li
                                      key={index}
                                      className="hover:bg-slate-200 cursor-pointer"
                                      onClick={() => {
                                        selectEndDateList(
                                          ampm,
                                          hours,
                                          minutes,
                                          tHours,
                                          tMinutes
                                        );
                                      }}
                                    >
                                      <a className="pl-2">
                                        <span className="text-sm">
                                          {`${ampm} ${hours}:${minutes}`}
                                        </span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                      control={control}
                      name="endDate"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => clearErrors()}
                >
                  등록
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendars;
