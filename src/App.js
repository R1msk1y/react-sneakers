
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/product1.jpg' 
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 9000,
    imageUrl: '/img/sneakers/product2.jpg' 
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/sneakers/product3.jpg' 
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/product4.jpg' 

  }


];

function App() {
  return (
    <div className="wrapper clear">

    
        <Drawer />
      
      

      <Header />


    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
      <h1>Все кросcовки</h1>
      <div className='search-block d-flex'>
        <img src='img/search.svg' alt='search'/>
        <input placeholder='Поиск...'/>

      </div>
      
      </div>

      <div className='d-flex'>
      

      {arr.map(function(item){

        return <Card
        title = {item.name}
        price = {item.price} 
        imageUrl = {item.imageUrl} 
   
        />

      })}

  
      
      

    
      </div>
     
    </div>

    </div>
  );
}

export default App;
