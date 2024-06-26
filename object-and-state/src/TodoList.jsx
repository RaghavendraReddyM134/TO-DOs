import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist(){
    let [todos,settodos]=useState([{task:"sample event",id:uuidv4(),isDone:false}]);
    let [newtodo,setnewtodo]=useState("");

let addnewTask=()=>{
    settodos([...todos,{task:newtodo,id:uuidv4(),isDone:false}])
    setnewtodo("");
}
let updatenewvalue=(event)=>{
    setnewtodo(event.target.value);
};

let deleteTodo=(id)=>{
   settodos((prevtodos)=>todos.filter((prevtodos)=>prevtodos.id!=id));
//    console.log(copy);
}

let markall=()=>{
   settodos((todos)=>todos.map((todo)=>{
    return {...todo,isDone:true};
}));

};

let markone=(id)=>{
    settodos((todos)=>todos.map((todo)=>{
        if (todo.id==id){
         return {...todo,isDone:true}}
        else{
            return todo;
        }
    }));


}
    return (
        <div>
            <input placeholder="enter your daily works" value={newtodo} onChange={updatenewvalue}></input><br></br>
            <button onClick={addnewTask}>Add</button>
            <hr></hr>
            <h5>To Do List</h5>
            <ul>{
                todos.map((todo)=>(
                    <li key={todo.id} >
                        <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                        
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>markone(todo.id)}>markAsDone</button>
                    </li>
                ))
                }

            </ul>
            <br></br><br></br>
            <button onClick={markall}>markAllDone</button>
        </div>
    );
}