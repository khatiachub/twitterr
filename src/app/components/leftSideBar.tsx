import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import tweeticon from '../images/tweeticon.svg'

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
export default function LeftSideBar() {
  return (
    <div className="max-sm:hidden sticky top-0 flex-[1_1_0%]  flex flex-col justify-between pb-5 h-screen  items-stretch px-3 border-l-[0.5px]  max-xl:flex-none max-xl:w-[14%] ">
          <div className="flex flex-col items-stretch   justify-between min-h-[80%] max-xl:items-end">
          {
            NAVIGATION_ITEMS.map((item)=>(
              <Link 
               className="hover:bg-black/10 py-2 px-4 space-y-1.5  rounded-full transition duration-200 flex items-center justify-start w-fit space-x-4 text-xl rounded-3xl" key={item.title} href={`/${item.title.toLowerCase()}`}
              >
                <div>
                  <item.icon className='text-2xl'  
                style={{
                fontSize: item.title==='Twitter' ? '32px' : '',
              }}/>
                </div>
                {item.title!=='Twitter'&&<div className='max-xl:hidden'>{item.title}</div>}
              </Link>
            ))
          }
          <button className="bg-primary mt-1.5  w-[240px] rounded-full white p-2.5  text-2xl text-center text-white hover:bg-opacity-70 transition duration-200 max-xl:hidden">Post</button>
          <button className='w-[50px] h-[50px] rounded-full bg-primary hidden max-xl:block text-white'>
            {/* <img src={tweeticon}/> */}
            T
          </button>
          </div>
          <div className=" w-full flex items-center max-xl:justify-end justify-between max-xl:p-0   hover:bg-black/10 py-2 px-4 rounded-full transition duration-200">
            <div className="flex items-center justify-center rounded-full bg-slate-400 w-[45px] h-[45px]">
              <FaRegUser/>
            </div>
            <div className="mr-8 max-xl:hidden">
            <p>khatia</p>
            <p>@khatia74758</p>
            </div>
            <div className='max-xl:hidden'>
              <BsThreeDots/>
            </div>
          </div>
        </div>
  )
}
