import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser,navigate]);
  return (
    <div className=" flex flex-col  h-[100%]">
      <div className=" h-[10%] text-6xl font-bold flex justify-center items-center">
        <div className='flex items-center '>
          <h1 className='text-5xl text-slate-400 font-bold'>
            Talkify - A Chat App
          </h1>
        </div>
        
      </div>
      <div className=' h-[90%] flex justify-center items-center'>
        <div className=' h-[80%] flex sm:w-[600px] md:w-[1000px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-500'>
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
      {/* <div className='h-[10%] flex sm:w-[600px] md:w-[1000px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-500'> */}
      
    </div>

    
  )
}

export default HomePage