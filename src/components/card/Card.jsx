import css from "./Card.module.css";


export default function Card(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={props.img} alt="#" />
      </div>
      <div className={css.text}>
        <h3>{props.price}</h3>
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}


