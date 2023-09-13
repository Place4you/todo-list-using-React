"use client"
import React, { useState } from 'react'
// import Header from ("@/Components")

const page = () => {
  const [title, settitle] =  useState("")
  const [desc, setdesc] =  useState("")
  const [mainTask, setmainTask] = useState([])

  let  renderTask = <h2 className='m-3 p-8 text-3xl font-bold bg-blue-500 text-white rounded-3xl w-full'>No task Avaiable</h2>


 

  const Submitted = (e)=>{
    e.preventDefault();
    console.log(title);
    console.log(desc);
    setmainTask([...mainTask, {title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }
  const deleteHandler = (i) =>{
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setmainTask(copytask)
  }

  if (mainTask.length>0)
  {
    renderTask = mainTask.map((e,i)=>{
      return (
        <>
  <div className='flex items-center justify-between m-6 p-8  bg-blue-500 text-white rounded-3xl w-full'>

        
        <li key={i} className='bg-grey-500 border-slate-800 '>
        <h3  className=' text-4xl font-extrabold'>{e.title}</h3>
        <h4 className=' text-2xl italic '>{e.desc}</h4>
        </li>
         <button onClick={()=>{
          deleteHandler(i);
         }} className='bg-red-500 text-white font-bold w- px-4 py-2 rounded text-2xl'>Delete</button>
         </div>
        </>
        
      )
    })
  }
  return (
    <>
      <h1 className='p-8 text-5xl   font-bold  text-center text-white  bg-blue-950 center'>Saadat Todo List Project</h1>

    <form className='flex justify-center items-center' onSubmit={Submitted}>
      <input className="m-8   p-2 text-2xl border-blue-400 border-4 rounded text-black  placeholder-grey"
      type='text' 
      required
      placeholder="Enter Task Name" 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>

        <input className="m-8  p-2 text-2xl  border-blue-400 border-4 rounded text-black placeholder-grey"
        type='text'
        required
        placeholder = " Enter Task Desctiption" 
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)

        }}/>
        <button className='m-8  p-2  rounded text-3xl text-white font-extrabold bg-blue-500  '>Add Task</button>
    </form>
        {/* <div className=' bg-blue-400 w-full'>  */}
          <div className='items-center m-3 w-10/12 rounded-3xl'>

            <ul>{renderTask}</ul>
        </div>

        <div className='flex justify-center w-full mt-5 p-3  items-center text-2xl font-extrabold bg-blue-900 text-white'>
          <h3>Developed By Saadat Ali</h3>
        </div>
      {/* </div> */}

    </>
  )
}

export default page
