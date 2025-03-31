import React, { useEffect, useState } from 'react'

function Todo() {

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []; // Default empty array
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  const handleInput = (e) =>{
    const input = e.target.value 
    setInputValue(input)
    // console.log(input);
  }
  
  
  const addTodoHandlel = () =>{
    const newtods = [...todos, inputValue]
    
    
    if (!inputValue){

      alert('todo is emppty please add todo ')
      return;
    } 
    if (todos.includes(inputValue)) {
      alert(`${inputValue} Is Already In Your Todo List ! 😳😳`)
      return;
    }
    
    setTodos(newtods);
  setInputValue("")
  
}


const handledelete = (id) =>{
  // 
  console.log(id.target );
   
  
}
console.log(todos);
const now = new Date();

const date = now.toLocaleDateString();


  return (
    <div className='bg-gray-900 h-screen'>
        <h1 className='shadow flex justify-center p-2 text-4xl font-bold text-red-500'>
            Todo {date}
        </h1>

        <div className='flex justify-center p-4 gap-3.5'> 
        <input type="text" value={inputValue} onChange={handleInput} className="border border-amber-300 text-white p-2 px-3 rounded-2xl outline-blue-500"/> <button className=' cursor-pointer bg-red-500 hover:bg-red-400 px-4 py-2 rounded-3xl' onClick={addTodoHandlel}>Add</button>
        </div>
 {todos.map((todos, key) =>
   (      
<div key={key} className='flex justify-center mt-3 items-center  '>
<h1 className='flex justify-center items-center bg-amber-200 w-[300px]  p-2 rounded-2xl'>{todos}</h1>
<button 
onClick={handledelete}
>❌</button>
<button>➡️</button>
    
</div> )
 )}     

    </div>
  )
}

export default Todo