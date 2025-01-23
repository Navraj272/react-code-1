import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/todoSlice';




const Todo = () => {
    const dispatch = useDispatch();
    const todos=useSelector(state => state.todos)
    return (
    <>
        <div>Todo Listtttt</div>
            <ul className="list-none">
            {todos.map((singleElement) => (
            <li
                className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                key={singleElement.id}
            >
                <div className='text-white'>{singleElement.text}</div>
                <button
                onClick={() => dispatch(removeTodo(singleElement.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                X
                </button>
            </li>
            ))}
        </ul>
    </>
    
  )
}

export default Todo