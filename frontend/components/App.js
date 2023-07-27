import React, {useState,useEffect} from 'react'
import axios from 'axios';
import SearchDate from './SearchDate';
import Image from './Image';


const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
const imgStyle = {
  width : '460px',
  height : '425px'
}

function App() {
  const [data,setData] = useState([]);
  
  useEffect(() => {
    async function getPhotoOfTheDay() {
      const res = await axios.get(url)
      try {
        setData(res.data)
        console.log(res)
      } catch {
        console.error(err)
      }
    }
   getPhotoOfTheDay()
  },[])
  // useEffect(()=> {
  //      const photoOfTheDay = document.querySelector('#photoOfTheDay');
  //     photoOfTheDay.style.position = "absolute";
  //     photoOfTheDay.style.left = '0'
  //     photoOfTheDay.style.marginTop = '1.5rem'
  //     photoOfTheDay.style.opacity = '10%'

  //   window.onload = (evt => {
  //     photoOfTheDay.style.position = "absolute";
  //     photoOfTheDay.style.left = "42%";
  //     photoOfTheDay.style.opacity = '100%'
  //     photoOfTheDay.style.transition = '1s ease-out'
  //   });
  // },[data])

  return (
  <>
  <div style = {{margin : '3rem'}}>
    <SearchDate /> 
    <Image data = {data} imgStyle = {imgStyle}/>
  </div>
  </>
  )
}

export default App
