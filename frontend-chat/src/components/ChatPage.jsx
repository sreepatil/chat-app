import React, { useRef, useState } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md'


const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      content: "hello",
      sender: "Sree",
    },
    {
      content: "hi",
      sender: "vaibhu",
    }
  ]);
  const [input, setInput] = useState("");
  const inputRed = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [currentUser] = useState("Sree")

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

      <main className='py-20 px-10 w-2/3 dark:bg-slate-500 mx-auto h-screen overflow-auto'>
        {
          messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`my-2 ${message.sender === currentUser ? "bg-amber-700" : "bg-purple-700"} p-2 max-w-xs rounded-2xl`}>

                <div className='flex flex-row gap-20'>
                  <img className='h-10 w-10' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                  <div className=' flex flex-col gap-1'>
                    <p className='text-sm font-bold'>{message.sender}</p>
                    <p>{message.content}</p>

                  </div>
                </div>

              </div>
            </div>
          )
          )
        }

      </main>

      {/* Input message containder*/}
      <div className=' fixed bottom-4 w-full h-16'>
        <div className='h-full pr-10 flex items-center gap-4 justify-between border w-1/2 mx-auto rounded-full dark:bg-gray-900'>
          <input type='text' placeholder='Type your message here...' className='dark:bg-gray-600 w-full px-5 py-2 text-sm font-medium  rounded-full h-full focus:outline-none' />
          <div className='flex gap-1'>
            <button className=' border dark:bg-red-600 px-3 py-2 rounded-2xl flex justify-center items-center'>
              <MdAttachFile size={20} />
            </button>
            <button className='dark:bg-blue-600 px-3 py-2 rounded-2xl flex justify-center items-center'>
              <MdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage