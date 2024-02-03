import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";


export default function MainComponent() {
  return (
    <div className='flex  sticky top-0  max-w-2xl flex-[2.5_2_0%]  min-h-[100vh] flex-col border-l-[0.5px] border-r-[0.5px] border-graycolor-600'>
      <div className='h-15 sticky backdrop-blur-3xl bg-white/10 bg-white z-20 top-0 w-full  border-b-[0.5px] border-graycolor-600'>
        <div className='flex w-full  justify-between items-center'>
          <h3 className='w-[45%] hover:bg-graycolor text-center p-4'>For you</h3>
          <h3 className='w-[45%] hover:bg-graycolor text-center p-4'>Following</h3>
          <div className='w-[10%] hover:bg-graycolor flex justify-center items-center rounded-full w-10 h-10 mr-2'>
            <MdOutlineSettings/>
          </div>
        </div>
      </div>
      <div className='h-32 border-b-[0.5px] border-graycolor-600 p-5'>
        <div className='flex w-[280px] justify-between items-center'>
           <div className="flex items-center justify-center rounded-full bg-slate-400 w-[45px] h-[45px]">
              <FaRegUser/>
           </div>
           <div className='flex flex-col'>
            <input className='border-none outline-none' type='text' placeholder='What is happening?!'/>
            {/* <div>everyeone can reply</div> */}
           </div>
        </div>
        <div className='flex w-full justify-between pl-[60px]'>
          <div>
            icons                      
          </div>
          <button className='w-[70px] h-[38px] rounded-full bg-primary text-white'>Post</button>
        </div>
      </div>
      {/* post */}
      <div className='border-b-[0.5px] border-graycolor-600 p-3 w-full min-h-[700px]  flex flex-col '>
        <div className='flex w-full justify-between '>
          <div className='w-[45px] h-[45px] rounded-full bg-primary'>
            <img/>
          </div>
          <div className='flex flex-col w-[85%]'>
            <div className='flex w-[230px] justify-between'>
              <div className='font-bold'>Spotify USA</div>
              <div className='text-gray-500'>Spotify USA@</div>
              <div className='text-gray-500'>1h</div>
            </div>
            <p >Our favorite celestial being @ayrastarrjust dropped Commas ✨ https://spotify.link/Commas</p>
            <img className='rounded-xl w-[70%] mt-5' src='https://pbs.twimg.com/media/GFVsUUnX0AAqSo2?format=jpg&name=small'/>
            <div className='w-full flex justify-between mt-5'>
              <div className='rounded-full transition duration-200 curso-pointer hover:bg-primary/10 hover:text-primary w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <FaRegComment/>
              </div>
              <div className='rounded-full transition duration-200 curso-pointer hover:bg-primary/10 hover:text-primary w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <BiRepost/>
              </div>
              <div className='rounded-full transition duration-200 curso-pointer hover:bg-pink/10 hover:text-pink w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <GrFavorite/>
              </div>
              <div className='rounded-full transition duration-200 curso-pointer hover:bg-primary/10 hover:text-primary w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <IoMdStats/>
              </div>
              <div className='flex w-[60px] justify-between'>
                <div className='rounded-full transition duration-200 curso-pointer hover:bg-primary/10 hover:text-primary w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <IoBookmarkOutline />
                </div>
                <div className='rounded-full transition duration-200 curso-pointer hover:bg-primary/10 hover:text-primary w-[35px] h-[35px] p-2 flex items-center justify-center'>
                <LuShare />
                </div>
              </div>
            </div>
          </div>
          <div>
            <BsThreeDots/>
          </div>
        </div>
      </div>
    </div>
  )
}
