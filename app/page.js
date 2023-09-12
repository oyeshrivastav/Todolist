"use client"
import React, { useState } from 'react'

function page() {
  const [title, settittle] = useState("") //create variables using useState
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]) //we are saving both tasks(title or desc)
  const submitHandler = (e)=>{
    e.preventDefault() //prevent page reload ing 
    setmainTask([...mainTask, {title, desc}])
    // console.log(title) //data print
    // console.log(desc) //data print
    settittle("")
    setdesc("")
    console.log(mainTask)
    
  };
  const deleteHandler =(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  let renderTask = <h2 className='text-lg'>No Task Available</h2>
  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-1/3'>
          <h5 className='text-xl font-semibold ml-20'>{t.title}</h5>
          <h6 className='text-lg font-medium ml-20'>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} className=' bg-red-800 text-white px-4 py-2 rounded-xl'>Delete</button>
        </li>
      );
    });    
  }
  return (
    <>
      <h1>Ankur's Todo list</h1>
      <form onSubmit={submitHandler} className=' ml-20'>
        <input type="text" className='text 2xl text-center border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg' placeholder="Enter Title Here" value={title} onChange={(e)=>{
          settittle(e.target.value)
        }}/>

        <input type="text" className='text 2xl text-center border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg' placeholder="Enter Description Here" value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className='text-white bg-blue-500 px-4 py-2 m-5 rounded-2xl'>+</button>
      </form>
      {/* <hr/> */}
      <div className='p-8 bg-slate-400 mt-5'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page