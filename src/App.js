
import './App.css';

function App() {
  return (
    <div className="wrapper clear">

      <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30'>Корзина</h2>

          <div className='items'>

          <div className='cartItem d-flex align-center mb-20'>
            
            <div className='cartItemImg' style={{backgroundImage: 'url(/img/sneakers/product1.jpg)'}} >
            </div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>   
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='btn-remove'/>
          </div>

          <div className='cartItem d-flex align-center mb-20'>
            
            <div className='cartItemImg' style={{backgroundImage: 'url(/img/sneakers/product1.jpg)'}} >
            </div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>   
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='btn-remove'/>
          </div>




          </div>

          <div className='cartTotalBlock'>

          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>

            <li>
            <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>

          </ul>

          <button className='greenBtn'>Оформить заказ<img src='/img/arrow.svg' alt='arrow' /></button>


          </div>

          

       

        </div>
      </div>




    <header className='d-flex justify-between align-center p-40'>
    <div className='d-flex align-center'>

    <img width={40} height={40} src='/img/header-logo.png'/>
      <div>
        <h3 className='text-uppercase'> React Sneakers</h3>
        <p className='opacity-5'>Магазин лучших кросовок</p>
      </div>

    </div> 
  

  
          
    <ul className='d-flex'>

<li className='mr-30'>
  <img width={18} height={18} src='/img/basket.svg'/>
  <span>1205 руб.</span>
  </li>

<li>
  <img width={18} height={18} src='/img/user.svg'/>
  </li>

</ul>
   
  

    </header>

    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
      <h1>Все кросcовки</h1>
      <div className='search-block d-flex'>
        <img src='img/search.svg' alt='search'/>
        <input placeholder='Поиск...'/>

      </div>
      
      </div>

      <div className='d-flex'>
      <div className='card'>
        <div className='favorite'>
        <img src='/img/likeUnliked.svg' alt='like-unliked'/>
        </div>
        <img width={133} height={112} src='/img/sneakers/product1.jpg' alt='Sneakers' />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
          </div>
       
        <button className='button'>
          <img width={11} height={11} src='/img/plus.svg' alt='plus'/>
        </button>
        </div>
      </div>

      <div className='card'>
        <img width={133} height={112} src='/img/sneakers/product2.jpg' alt='Sneakers' />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
          </div>
       
        <button className='button'>
          <img width={11} height={11} src='/img/plus.svg' alt='plus'/>
        </button>
        </div>
      </div>

      <div className='card'>
        <img width={133} height={112} src='/img/sneakers/product3.jpg' alt='Sneakers' />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
          </div>
       
        <button className='button'>
          <img width={11} height={11} src='/img/plus.svg' alt='plus'/>
        </button>
        </div>
      </div>

      <div className='card'>
        <img width={133} height={112} src='/img/sneakers/product4.jpg' alt='Sneakers' />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
          </div>
       
        <button className='button'>
          <img width={11} height={11} src='/img/plus.svg' alt='plus'/>
        </button>
        </div>
      </div>
      </div>
     
    </div>

    </div>
  );
}

export default App;
