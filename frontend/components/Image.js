import React from "react";
import Explanation from "./Explanation";

export default function Image(props) {
    const imgOrVideo = props.data.media_type === 'image'
    ? <img style = {props.imgStyle} src = {props.data.url} alt = {'Nasa Photo of The Day'}/> 
    : props.data.media_type === 'video' 
    ? <video style = {props.style} controls><source src = {props.data.url}/>Video could not be rendered</video>
    : '';
    return (
        <>
        <div>
            {imgOrVideo}
            <>{props.data.date}</>
        </div>
        <div>
            <Explanation data = {props.data}/>
        </div>
        </>
    )
}