import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Image from './Image';



const imgStyle = {
  width: '110%',

  height: '1050px'
}

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');


  let year = parseInt(date.slice(0, 4));
  let month = parseInt(date.slice(5, 7));
  let day = parseInt(date.slice(8, 10));


  const yearTern = typeof year === 'number' ? year : '';
  const monthTern = typeof month === 'number' ? month : '';
  const dayTern = typeof day === 'number' ? day : '';


  const finalYear = yearTern >= 1000 && yearTern < 10000 ? yearTern : 0;
  const finalMonth = monthTern > 0 && monthTern <= 12 ? monthTern : 0;
  const finalDay = dayTern > 0 && dayTern < 32 ? dayTern : 0;
  console.log(finalYear)

  

  let url = API_KEY ? `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}` : "http://localhost:9009/api/apod?api_key=DEMO_KEY";

  function getPicture(url) {

    if (finalYear.toString().split('').length === 4 &&
      finalMonth.toString().split('').length >= 1 && finalMonth.toString().split('').length <= 2 &&
      finalDay.toString().split('').length >= 1 && finalDay.toString().split('').length <= 2) {
      url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${finalYear}-${finalMonth}-${finalDay}`;
    }
    useEffect(() => {
      if (url) {
        axios.get(url)
          .then(res => {
            console.log(url)
            setData(res.data)
          })
          .catch(err => {
            console.log('The first one did not work')
          })
      }
    }, [date])
  }

  getPicture(url)
  return (
    <>
      <div style={{ margin: '2rem' }}>
        {data && <Image date={date} setDate={setDate}
          data={data} imgStyle={imgStyle} getPicture={getPicture} url={url} />}
      </div>
    </>
  )
}

export default App
