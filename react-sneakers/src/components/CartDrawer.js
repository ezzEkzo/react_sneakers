function Drawer () {
    return (
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex">
          <h2 className="mb-30 d-flex justify-between">Your Bag <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
          
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style = {{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Stan Smith Shoes</p>   
                <b>125 $</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style = {{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p className="mb-5">Stan Smith Shoes</p>   
                <b>125 $</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          
          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total price:</span>
              <div></div>
              <b>250 $</b>
            </li>
            <li>
              <span>Sales Tax:</span>
              <div></div>
              <b>20 $</b>
            </li>
          </ul>
          <button className="greenButton">Place an order <img src="/img/arrow.svg" alt="Arrow" /> </button>
          </div>
        </div>
      </div> 
    );
}

export default Drawer;