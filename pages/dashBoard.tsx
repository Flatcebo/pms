import PageLayout from "@components/PageLayout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function dashBoard() {
  const onClickDash = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
  return (
    <div className="">
      <PageLayout />
      <div className="relative w-[88%] h-[100%] left-[15rem]">
        <div className="absolute inset-0 h-[800px] w-full bg-[red] outline ">
          <div></div>
        </div>
      </div>
    </div>
  );
}
