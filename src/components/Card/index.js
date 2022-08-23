import cardStyles from './Card.module.scss';

function Card (props){

  const onClickBtn = ()=>{

    alert(props.title)

  };
    return (

<div className={cardStyles.card}>
<div className={cardStyles.card}>
<img src='/img/likeUnliked.svg' alt='like-unliked'/>
</div>
<img width={133} height={112} src={props.imageUrl} alt='Sneakers' />
<h5>{props.title}</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column'>
  <span>Цена:</span>
  <b>{props.price} руб.</b>
  </div>

<button className='button' onClick={onClickBtn}>
  <img width={11} height={11} src='img/plus.svg' alt='plus'/>
</button>
</div>
</div>

    );

}


export default Card;

