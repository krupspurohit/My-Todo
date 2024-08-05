import React, { useState } from "react";

export const Todo = () => {
  const [addTodo, setAddTodo] =useState("")
  const [Description , setDescription] = useState("")

  const [addBtn , setAddBtn] = useState("")

  const AddTodoChange = (event)=>{
    
    setAddTodo(event.target.value)

  }

  const AddDescriptionChange =(event)=>{
    
    setDescription(event.target.value)
    
  }
  const AddBtn = (event) =>{
    setAddBtn(event.target.value)
    console.log("Add Successfuly" )
    console.table(event.target.value)
    
  }
  return (
    <>
      <div>
        <div className="text-3xl  font-bold  m-auto p-5 bg-clip-text text-transparent bg-gradient-to-bl from-purple-950 via-green-500 to-indigo-950  text-center">
          My Todo App
        </div>
        <hr />
        <hr />
        <div
          className=" w-6/12 border-2 m-auto my-7 px-05 py-3 bg-gray-200 shadow-lg rounded-md border-gray-300 "
        >
          <div>
            <div className="flex justify-around items-center flex-wrap">
              <div className="">
                <div>
                  <label className="font-bold">Todo Name</label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name="todoname"
                    value={addTodo}
                    onChange={AddTodoChange}
                    placeholder="Enter your TodoName"
                    className="!border !border-gray-300 bg-transparent border-t-transparent bg-white shadow-gray-900/5 outline-none rounded-sm px-2"
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <label className="font-bold">Desription</label>
                </div>
                <div className="">
                  <input
                    type="text"
                    name="description"
                    value={Description}
                    onChange={AddDescriptionChange}
                    placeholder="Enter description"
                    className="!border !border-gray-300 bg-transparent border-t-transparent bg-white shadow-gray-900/5 outline-none rounded-sm px-2"
                  />
                </div>
              </div>

              <div className="my-2">
                <button 
                type="submit"
                value={addBtn}
                onClick={AddBtn}
                className="bg-green-300 text-black font-bold px-8  py-3 rounded-md">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="my-5 mx-5 ">
            <hr className=" border-pink-950" />
            <hr className=" border-pink-950" />
          </div>

          <div className="flex flex-wrap justify-start mx-3 items-center">
            <div>
              <button className="rounded-md px-5 py-3 bg-gray-800 font-bold text-white mx-3">
                ToDo
              </button>
            </div>
            <div>
              <button className="rounded-md px-5 py-3 bg-gray-800 font-bold text-white ">
                Complated
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
