
import './App.css';
import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

 
function App() {
const [cartOpened, setCartOpened] = React.useState(false);
const [items, setItems] = React.useState([]);
const [cartItems, setCartItems] = React.useState([
]);


 React.useEffect(()=>{
  fetch('https://6308f159722029d9dddbe646.mockapi.io/items').then(res =>{
    return res.json();
   }).then(json =>{
    setItems(json);
   })

 }, []);





  return (
    <div className="wrapper clear">
      {/* <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div> */}

    
    {cartOpened ? 
    <Drawer
    items={cartItems}
    clickOnRemoveBtn = {()=>{
      return setCartOpened(false);

    }}

    /> : 
    null}
        
      
      

      <Header

      clickOnCart = {() => {
        return setCartOpened(true);
        
      }}
      
      
      />


    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
      <h1>Все кросcовки</h1>
      <div className='search-block d-flex'>
        <img src='img/search.svg' alt='search'/>
        <input placeholder='Поиск...'/>

      </div>
      
      </div>

      <div className='d-flex flex-wrap'>
      

      {items.map(function(item){

        return <Card
        title = {item.name}
        price = {item.price} 
        imageUrl = {item.imageUrl}
        onClickFavorite = {() => (console.log(`Добавили в закладки`))}
        onClickPlus = {() => (console.log('Добавили в корзину'))}
   
        />

      })}

  
      
      

    
      </div>
     
    </div>

    </div>
  );
}

export default App;
