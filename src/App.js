
import './App.css';

function App() {
  return (
    <div className="wrapper">
    <header>
    <div className='headerLeft'>

    <img width={40} height={40} src='/img/header-logo.png'/>
      <div className='headerInfo'>
        <h3> React Sneakers</h3>
        <p>Магазин лучших кросовок</p>
      </div>

    </div> 
    // left part END

  
          
    <ul className='headerRight'>

<li>
  <svg></svg> <span>1205 руб.</span>
  </li>

<li>
  <svg></svg>
  </li>

</ul>
   
    // right part END

    </header>

    <div className='content'>
      <h1>Все кросовки</h1>
    </div>

    </div>
  );
}

export default App;
