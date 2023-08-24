import Headers from "@components/Headers";
import SideBar from "@components/SideBar";

const PageLayout = () => {
  return (
    <div>
      <div className="absolute top-0 h-full w-full bg-[#1b3a54d4]" />
      <Headers />
      <SideBar />
    </div>
  );
};
export default PageLayout;
