
import LeftSideBar from "./components/leftSideBar";
import MainComponent from "./components/mainComponent";
import RightSideBar from "./components/rightSideBar";
import { MdOutlineSettings } from "react-icons/md";



export default function Home() {
  return (
    <div className="w-full h-full relative  flex justify-center items-center">
      <div className="max-w-[1290px] w-full h-full flex  relative">
        <LeftSideBar/>
        <MainComponent/>
        <RightSideBar/>
      </div>
     </div>
  );
}
