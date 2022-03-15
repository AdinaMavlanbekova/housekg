import {useState} from 'react'
import Card from '../components/card/Card'

export default function Homepage(props) {

// const [num, setNum] = useState(0);

  const [houses, setHouses] = useState(
    [
      {
        id: 1,
        title: "Продаю дом 4к",
        img: "https://www.topdom.info/img/beautiful-houses/87-b.jpg",
        price: "40000$"
      },
      {
        id: 2,
        title: "Продаю 1кв 4к",
        img: "https://cdnn21.img.ria.ru/images/07e5/0a/0f/1754777085_0:0:2500:2000_600x0_80_0_0_96e74009be120c6d0b9188a442764ba0.jpg",
        price: "30000$"
      },
      {
        id: 3,
        title: "Продаю собакуб в подарок дом 4к",
        img: "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg",
        price: "90000$"
      }
    ]
  );
  return (
    <div className='container page'>

{/* <div>
  <button onClick={() => {
    setNum(num-1)

  } }>minus</button>
  <h1>{num}</h1>
  <button onClick={() => {
    setNum(num+1)

  }}>plus</button>
</div> */}



        <div className='title'>Homepage</div>

       <div className='cardsWrapper'>
          {
          houses.map((house) => <Card
          key={house.id}
          title={house.title}
          img={house.img}
          price={house.price}
          />)
          }
        </div>
    </div>
  )
}
