import React, { useState } from "react";
import {v4 as uuidv4} from 'uniqid';


export const Todo = () => {
  const [addTodo, setAddTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const AddTodoChange = (event) => {
    setAddTodo(event.target.value);
  };

  const handleAdd = (event) => {
    setTodos([...addTodo, { addTodo, isComplated: false }]);
    setAddTodo("");
    console.log("Added Successfuly... ");
  
  };
  const handleEdit = (event) => {
    console.log("Edit Successfully!");
  };

  const handleDelete = (event, id) => {
     id = event.target.name
  };

  return (
    <>
      <div >
        <div className="text-3xl  font-bold  m-auto p-5 bg-clip-text text-transparent bg-gradient-to-bl from-purple-950 via-green-500 to-indigo-950  text-center">
          My Todo App
        </div>
        <hr />
        <hr />
        <div className="border-2 w-3/4  m-auto my-7 px-05 py-3 bg-gray-200 shadow-lg rounded-md border-gray-300 ">
          
            <div className="flex justify-between items-center">
              <div className=" ">
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
              
              <div className="my-2 w-1/4">
                <button
                  type="submit"
                  onClick={handleAdd}
                  className="bg-green-300 text-black font-bold px-8  py-3 rounded-md"
                >
                  Add
                </button>
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
          <div className="my-3">
            <div className="font-bold mx-2 px-4">Your Todo List</div>
          </div>
          <div className="flex w-full mx-auto flex-wrap items-center justify-center">
            <div className="flex justify-evenly items-center mx-auto ">
              <div className="">
                
                {Todos.map((item) => {
                  return (
                    <div className="flex justify-between w-1/2" key={item.id}>
                      <div className={item.isComplated ? "line-through" : ""}>
                        {item.addTodo}
                      </div>
                      <div className="mx-2">
                        <button
                          onClick={handleEdit}
                          className="px-2 py-1 bg-violet-300 rounded-md"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="mx-2">
                        <button
                        name="deletebtn"
                          onClick={(e)=> handleDelete(e, item.id)}
                          
                          className="px-2 py-1 bg-red-300 rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
