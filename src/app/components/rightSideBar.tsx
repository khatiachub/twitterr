import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";



export default function RightSideBar() {

  const trends=[
    {
      country:'Trending in Georgia',
      title:'Airdrop',
      posts:'1.14M posts'
    },
    {
      country:'Politics · Trending',
      title:'Armenia',
      posts:'6,763 posts'
    },
    {
      country:'Trending in Georgia',
      title:'Airdrop',
      posts:'1.14M posts'
    },
    {
      country:'Trending in Georgia',
      title:'Airdrop',
      posts:'1.14M posts'
    }
  ]
  return (
    <div className='max-lg:hidden sticky overflow-y-auto  overflow-x-hidden top-2 items-stretch w-full   flex flex-col space-y-4 h-screen flex-[1.5_1_0%] border-r-[0.5px] p-5'>
      <div className='relative w-full '>
      <input type='text' placeholder='Search' className='peer bg-secondary rounded-full w-full focus:border focus:border-[0.5px] focus:border-primary  border-[0px] outline-none p-2.5 pl-14'/>
        <div className='absolute top-3 left-5 text-xl text-gray-500 peer-focus:text-primary'>
        <IoSearchOutline />
        </div>
      </div>
      <div className='flex flex-col w-full p-4 rounded-[10px] bg-secondary'>
        <h2 className='font-bold'>Subscribe to Premium</h2>
        <p className='mt-3'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className='mt-3 bg-black rounded-full text-white w-[115px] p-1.5 '>Subscribe</button>
      </div>
      <div className='w-full rounded-[10px] bg-secondary h-screen'>
      <h1 className='font-bold mt-3 ml-3'>Trends for you</h1>
        {trends.map((trend)=>(
          <div className='hover:bg-graycolor transition duration-200 w-full h-[95px] mt-3 p-3 flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-sm'>{trend.country}</span>
              <span className='font-bold text-sm'>{trend.title}</span>
              <span className='text-sm'>{trend.posts}</span>
            </div>
            <BsThreeDots/>
          </div>
        ))}
      </div>
      <div className='w-full rounded-[10px] bg-secondary h-screen '>
        <h1 className='font-bold ml-3 mt-3'>Who to follow</h1>
        <div className='flex justify-between items-center w-full mt-3 hover:bg-gray-500/10 p-3'>
          <div className='flex items-center justify-between w-[50%]'>
              <img className='w-[40px] h-[40px] rounded-[4px] bg-pink'/>
              <div className='flex flex-col'>
                <span>SpotifyCares</span>
                <span>@SpotifyCares</span>
              </div>
          </div>
          <button className='w-[90px] bg-black h-[35px] rounded-full text-white'>Follow</button>
        </div>
      </div>
      <div className='flex flex-col items-between p-3'>
        <div className='flex w-full justify-between'>
          <a className='text-xs hover:underline transition duration-200' href='https://twitter.com/tos'>Terms of Service</a>
          <a className='text-xs hover:underline transition duration-200' href='https://twitter.com/privacy'>Privacy Policy</a>
          <a className='text-xs hover:underline transition duration-200' href='https://support.twitter.com/articles/20170514'>Cookie Policy</a>
        </div>
        <div className='flex w-full justify-between'>
          <a className='text-xs hover:underline transition duration-200' href='https://help.twitter.com/resources/accessibility'>Accessibility</a>
          <a className='text-xs hover:underline transition duration-200' href='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo'>Adsinfo</a>
          <span className='text-xs hover:underline transition duration-200'>More</span>
          <span className='text-xs hover:underline transition duration-200'>© 2024 X Corp.</span>
        </div>
      </div>
    </div>
  )
}
