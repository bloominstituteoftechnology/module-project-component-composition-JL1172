import React from "react";

export default function SearchDate(props) {
    const {date,setDate} = props;
    const changeHandler = (evt) => {
        setDate(evt.target.value)
    }
    return (
        <>
        <div id = 'label'>
            <label>Type in data in this format :  </label>
            <input type="text" placeholder="YYYY-MM-DD" 
            onChange={changeHandler}></input>
        </div>
        </>
    )
}