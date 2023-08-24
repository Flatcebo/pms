//sidebar가 17.4퍼센트 유지함 or 10.9퍼 유지

import Image from "next/image";
import headerMark from "@public/headerMark.png";
import Link from "next/link";

export default function SideBar() {
  return (
    <main className="">
      {/* 부모 사이드바 */}
      <aside className="font-Nanums font-[700]">
        {/* 자식 사이드바 */}
        <ul
          className="absolute top-[16.7vh] -left-[4px] w-[12.9vw] h-[83.3vh] text-[1.3rem] 
         opacity-80 bg-[#1c577c4e] rounded-lg leading-[4rem] text-right shadow-xl shadow-[#00f7ff5d]"
        >
          {/* 사이드바 리스트 */}
          <li className="inline-block">
            <Link href="/main">
              <button className="mt-[1rem] focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] tracking-[0.3em] ">
                  대시보드
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem]">
            <Link href="/project">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] tracking-[0.3em]">
                  프로젝트
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem]">
            <Link href="/calendar">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] tracking-[0.3em]">
                  캘린더
                </p>
              </button>
            </Link>
          </li>

          <li className="text-[1.3rem]">
            <Link href="/scoreBoard">
              <button className="focus:text-[#ffffff]">
                <p className="hover:text-[#ffffffaa] active:text-[black] tracking-[0.3em]">
                  업무일지
                </p>
              </button>
            </Link>
          </li>
        </ul>

        <footer className="absolute bottom-3 left-5">
          {/* <Image src={headerMark} alt="LOGOs" height={90} width={64}></Image> */}
        </footer>
      </aside>
    </main>
  );
}
