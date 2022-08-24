import cardStyles from './Card.module.scss';
import React from 'react';

function Card (props){

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {

    setIsAdded(!isAdded);
  }

    return (

<div className={cardStyles.card}>
<div className={cardStyles.favorite} onClick = {props.onClickFavorite}>
<img src='/img/likeUnliked.svg' alt='like-unliked'/>
</div>
<img width={133} height={112} src={props.imageUrl} alt='Sneakers' />
<h5>{props.title}</h5>
<div className='d-flex justify-between align-center'>
  <div className='d-flex flex-column'>
  <span>Цена:</span>
  <b>{props.price} руб.</b>
  </div>


  <img className={cardStyles.plus} onClick={onClickPlus} src={isAdded ? '/img/btnChecked.svg' : '/img/btnPlus.svg' } alt='plus'/>

</div>
</div>

    );

}


export default Card;

