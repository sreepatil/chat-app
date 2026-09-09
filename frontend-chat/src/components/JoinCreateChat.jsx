import React from 'react'
import chatIcon from '../assets/chat.png'
const JoinCreateChat = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white">
        <div className='p-10 dark:border-gray-500 border rounded-3xl w-full flex flex-col gap-5 max-w-md rounded-2xl dark:bg-gray-900 shadow'>
          <div >
            <img src={chatIcon} className='w-24 flex items-center-safe' />
          </div>
            <h1 className='text-2xl font-semibold text-center mb-6'>Join Room /Create Room ..</h1>
            {/* name div */}
            <div className=''>

              <label htmlFor='name' className='block font-medium mb-2'> Your Name 
              </label>
              <input type='text' id='name' className='w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
            </div>
            {/* room id  div */}
            <div className=''>

              <label htmlFor='roomId' className='block font-medium mb-2'> Room Id / New Room Id
              </label>
              <input type='text' id='name' className='w-full dark:bg-gray-600 px-4 py-2 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
            </div>
            {/* button */}
            <div className='flex justify-center gap-20 mt-2'>
              <button className='px-3 py-2 dark:bg-blue-600 hover:dark:bg-blue-800 rounded-2xl'>Join Room</button>
            
              <button className='px-3 py-2 dark:bg-orange-600 hover:dark:bg-orange-800 rounded-2xl '>Create Room</button>
            </div>
        </div>
    </div>
  )
}

export default JoinCreateChat

{
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        This is Main Page
      </h1>

      <button
        onClick={() => {
          toast.success('This is toast message')
        }}
        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
      >
        Click me
      </button> */}