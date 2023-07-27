import React, { useEffect } from "react";


export default function SearchDate(props) {
    const { date, setDate } = props;

    let dateCopy = date;
    let newString = String(dateCopy)
    let newArray = [];
    let array = newString.split('');
    let numberArray = array.map(n => {
        const num = +n;
        newArray.push(num);
        return newArray;
    });
    let year = newArray.join('').slice(0, 4);
    let month = newArray.join('').slice(4, 6);
    let day = newArray.join('').slice(6, 8);
    let currentYear = new Date().getFullYear();


    let secondTernary = year > currentYear ?
        <label>Must pic a year in the past</label> :
        month > 12 || day > 31 ?
            <label>Must be a valid date</label> :
            '';

    let lengthTernary = newArray.length > 10 ?
        <label>Date must be proper length</label> : '';



    const changeHandler = (evt) => {
        if (evt.target.value !== '-') {;
        setDate(evt.target.value);
        }
    }
    return (
        <>
            <div id='label'>
                <label>Type in data in this format :  </label>
                <input type="text" placeholder="YYYY-MM-DD"
                    onChange={changeHandler}></input>
                <div>
                    {secondTernary}
                </div>
                <div>
                    {lengthTernary}
                </div>
             
            </div>
        </>
    )
}