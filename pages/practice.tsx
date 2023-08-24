import PageLayout from "@components/PageLayout";
import useMutation from "@libs/client/useMutation";
import { Project } from "@prisma/client";
import { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import useSWR from "swr";

export default function Practice() {
  interface ProjectsResponse {
    ok: boolean;
    projects: Project[];
  }

  const Project = ({}) => {
    const { data } = useSWR<ProjectsResponse>("/api/project");

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    interface ProjectForm {
      projectName: string;
      startDate: string;
      endDate: string;
    }

    const [
      createProject,
      { loading: createLoading, data: createProjectData, error: createError },
    ] = useMutation(`/api/project`);

    const { register, handleSubmit } = useForm<ProjectForm>();

    const onValid = async (validForm: ProjectForm) => {
      createProject(validForm);
      return false;
    };

    return (
      <div>
        <PageLayout />
        <form onSubmit={handleSubmit(onValid)}>
          {data?.projects?.map(gogobebe => {
            return (
              <div {...register("projectName")} className="text-[30px]">
                {gogobebe.name}
              </div>
            );
          })}
        </form>
      </div>
    );
  };
}
