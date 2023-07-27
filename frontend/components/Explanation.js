import React from "react";
import SearchDate from "./SearchDate";

export default function Explanation(props) {
    const {date,setDate} = props;
    return (
        <>
        <div >
        <div id = 'container' >
            <h2 id = 'title' >{props.data.title}</h2>
            <p id ='paragraph'>{props.data.explanation}</p>
            <SearchDate getPicture = {props.getPicture} date = {date} 
            setDate = {setDate} data = {props.data} url = {props.url}/>
        </div>
        
        </div>
        </>
    )
}