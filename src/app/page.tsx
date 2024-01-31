import { MdHomeFilled } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";


const NAVIGATION_ITEMS=[
  {
    title:'Twitter',
    icon:FaXTwitter
  },
  {
    title:'Home',
    icon:MdHomeFilled
  },
  {
    title:'Explore',
    icon:RiSearchLine
  },
  {
    title:'Notifications',
    icon:GrNotification
  },
  {
    title:'Messages',
    icon:HiOutlineMail
  },
  {
    title:'Lists',
    icon:LiaClipboardListSolid
  },
  {
    title:'Premium',
    icon:FaXTwitter
  },
  {
    title:'Profile',
    icon:FaRegUser
  },
  {
    title:'More',
    icon:CgMoreO
  }
]

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <div className="fixed w-[275px] flex flex-col h-screen  space-y-4 my-4">
          <div className="flex flex-col items-stretch  space-y-4 mt-4">
          {
            NAVIGATION_ITEMS.map((item)=>(
              <Link className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-6 text-2xl rounded-3xl p-0.5" key={item.title} href={`/${item.title.toLowerCase()}`}>
                <div>
                  <item.icon/>
                </div>
                {item.title!=='Twitter'&&<div>{item.title}</div>}
              </Link>
            ))
          }
          <button className="bg-primary  w-full rounded-full white p-4 text-2xl text-center text-white hover:bg-opacity-70 transition duration-200">Post</button>
          </div>
          <button className="bg-primary  w-full rounded-full white p-4 text-2xl text-center text-white hover:bg-opacity-70 transition duration-200">Post</button>
        </div>
        <div>home</div>
        <div>right</div>
      </div>
    </div>
  );
}
