import React from "react";
import Explanation from "./Explanation";


export default function Image(props) {
    const {date,setDate} = props;
    const imgOrVideo = props.data.media_type === 'image'
    ? <img id = 'img' style = {props.imgStyle} src = {props.data.url} alt = {'Nasa Photo of The Day'}/> 
    : props.data.media_type === 'video' 
    ? <video style = {props.style} controls><source src = {props.data.url}/>Video could not be rendered</video>
    : '';
    return (
        <>
        <div className="img">
            {imgOrVideo}
            <div id = 'imgContentDiv'>{props.data.date} {props.data.copyright}</div>
            <Explanation date = {date} setDate = {setDate} data = {props.data}/>
        </div>
        </>
    )
}