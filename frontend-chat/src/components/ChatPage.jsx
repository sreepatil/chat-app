import React from 'react'
import { MdSend } from 'react-icons/md'

const ChatPage = () => {
  return (
    <div>
      {/* This is header */}
        <header className='dark:border-gray-700 border h-20 fixed w-full dark:bg-gray-900 py-5 shadow-2xl flex justify-around items-center'>
            {/* room name container */}
            <div >
              <h1 className='text-xl font-semibold'>
                Room : <span>Family Room </span>
              </h1>

            </div>

            {/* username container */}
            <div >
              <h1 className='text-xl font-semibold'>
                User : <span>Shubham Patil </span>
              </h1>
                
            </div>

            {/* button leave room */}
            <div >
              <button className='bg-red-600 dark:hover:bg-red-700 px-3 py-1 text-sm font-medium rounded-full'>
                Leave Room
              </button>
                
            </div>
        </header>

        {/* Input message containder*/}
        <div className=' fixed bottom-2 w-full h-16'> 
          <div className='h-full flex items-center gap-4 justify-between border w-2/3 mx-auto rounded-2xl dark:bg-gray-900'>
          <input type='text' placeholder='Type your message here...' className='dark:bg-gray-600 w-full px-3 py-2 text-sm font-medium  rounded-2xl h-full focus:ring-0'  />
          <button className='dark:bg-blue-600 px-3 py-2 rounded-2xl flex justify-center items-center'>
            <MdSend size={30}/>
          </button>
          </div>
        </div>
    </div>
  )
}

export default ChatPage