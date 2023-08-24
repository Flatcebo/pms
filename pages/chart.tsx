import PageLayout from "@components/PageLayout";

export default function chart() {
  return (
    <div className="">
      <PageLayout />
      <div className="relative w-[88%] h-[100%] left-[15rem]">
        <div className="absolute inset-0 h-[795px] w-full b-[#171cb624]  ">
          <div className="absolute top-[50px] h-[89%] w-[200px] outline">
            <h1>PROJECT LIST</h1>
          </div>
          <div className="absolute top-[30px] h-[93%] w-full left-[220px] outline">
            <div className="inline-block h-full w-[400px]">
              <div className="h-[400px] w-[400px] outline">
                <h1>Main project chart</h1>
              </div>
              <div className="absolute bottom-[18px] h-[300px] w-[400px] outline ">
                <h1>PEOPLE</h1>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className="absolute top-3 left-[420px] h-[96.7%] w-[1030px] outline">
                <div className="inline-block h-[100%] w-[200px] outline">
                  People LIST
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="inline-block h-[100%] w-[830px] outline">
                  PERSONAL CHART
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
