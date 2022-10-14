
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center"> 
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">e-Sneakers</h3>
            <p>Best Sneaker Shop </p>
          </div>
        </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/bag.png" alt="bag" />
              <span>
               <b>95$</b> 
              </span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user" />
            </li>
          </ul>
      </header>
      <div className="content p-40">
        <h1>All Sneakers</h1>
        

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/sneakers1.jpg" alt="Sneakers1" />
           <p>Stan Smith Shoes</p>
           <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>125$</b>
            </div>
              <button className="button">
                <img width={11} height={11} src="/img/cross.png" alt="Cross" />
              </button>
           </div>
        </div>



      </div>
    </div>
  )
}
export default App;
