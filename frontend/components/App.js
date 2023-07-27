import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Image from './Image';


const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
const imgStyle = {
  width : '1500px',
  height : '950px'
}


function App() {
  const [data,setData] = useState([]);
  const [date,setDate] = useState('')

  useEffect(() => {
  
       axios.get(url)
      .then(res => {
       setData(res.data)
        console.log(res) 
      }) 
      .catch(err=> {
        console.log('The first one did not work')
         axios.get("http://localhost:9009/api/apod?api_key=DEMO_KEY")
        .then(res=> {
          setData(res.data)
          console.log(res.data)
        }) 
        .catch(err=> {
          console.error('This is the last error ' + err);
        });
      }) 
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
  <div style = {{margin : '2rem'}}> 
    <Image date = {date} setDate = {setDate} data = {data} imgStyle = {imgStyle} />
  </div>
  </>
  )
}

export default App
