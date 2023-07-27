import React, { useEffect } from "react";

export default function SearchDate(props) {
    const { date, setDate } = props;

    let dateCopy = date;
    let newDateCopy = dateCopy.replace(/-/g, '');
    let newArray = [];
    let array = newDateCopy.split('');
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
        month > 12  || day > 31 ? 
        <label>Must be a valid date</label> :
        '';

    let lengthTernary =  newArray.length > 8  ?
    <label>Date must be proper length</label> : '';
    // let monthComparison = 
    // const filteredArray = numberArray.filter(n=> typeof n !== "number");
    // let numberCondition =  filteredArray.length;
    // let ternary = valueConditionLength > 0 
    // ? <label>Value must be less than 10</label> 
    // : numberCondition !== 0 
    // ? <label>Value must be a number</label> 
    // : ''; 



    const changeHandler = (evt) => {
        setDate(evt.target.value);
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