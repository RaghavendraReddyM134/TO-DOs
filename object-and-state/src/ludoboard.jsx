import {useState} from "react";

export default function Ludoboard(){
    let[Moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0});
    let[arr,setArr]=useState(["no moves"]);
    let updateblue=()=>{
        setMoves((prevMoves)=>{
            console.log(`movesblue=${Moves.blue}`);
            return {...prevMoves,blue:prevMoves.blue+1};
        });
        setArr((prevarr)=>{return [...prevarr,"bluemoves"]});
        console.log(arr);
    };
    let updateyellow=()=>{
        console.log(`movesyellow=${Moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
    };
    let updatered=()=>{
        console.log(`movesred=${Moves.red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1};
        });
    };
    let updategreen=()=>{
        console.log(`movesgreen=${Moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green +1};
        });
    };


    return(
        
        <div>
            <p>Game begins!</p>
            <p>{arr}</p>
            <div className="board">
            <p>blue Moves={Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>blue Moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow} >+1</button>
            <p>blue Moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
            <p>blue Moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
            </div>
        </div>
        
    );
}