import { Project, User } from "@prisma/client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { userAgentFromString } from "next/server";
import { Doughnut } from "react-chartjs-2";
import useSWR from "swr";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["어복황제 APP", "PMS Project"],
  datasets: [
    {
      label: "# of Votes",
      data: [80, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        // "rgba(255, 206, 86, 0.2)",
        // "rgba(75, 192, 192, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        // "rgba(255, 206, 86, 1)",
        // "rgba(75, 192, 192, 1)",
        // "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// interface ProjectsResponse {
//   ok: boolean;
//   projects: Project[];
//   users: User[];
// }

export default function ChartDoghnut() {
  // const { data, mutate } = useSWR<ProjectsResponse>("/api/project");

  return (
    <div>
      <Doughnut data={data} />
      {/* {data?.users?.map(user => (
        <li className="" key={user.id}>
          {user.name}
        </li>
      ))} */}
    </div>
  );
}
