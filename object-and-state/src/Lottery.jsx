import { useState } from "react";
import {genticket,sum} from "./helper.js";
import "./Lottery.css";

export default function LotteryGame(){
    let[Ticket,setTicket]=useState(genticket(3));
    let iswinning=sum(Ticket)===15;

    let buynewticket=()=>{
        setTicket(genticket(3));
    }


    return(
        <>
        <h1>Lottery Game!</h1>
        <div className="Ticket">
            <span>{Ticket[0]}</span>
            <span>{Ticket[1]}</span>
            <span>{Ticket[2]}</span>
        </div>
        <br></br>
        <button onClick={buynewticket}>Buy New Ticket</button>
        <h3>{iswinning && "congratualtion you won"}</h3>
        </>
    );

}