function Card() {
    return (
        <div className="card">
          <div className="favorite"> 
            <img src="/img/unliked.svg" alt="Unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers1" />
           <h5>Stan Smith Shoes</h5>
           <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>125$</b>
            </div>
              <button className="button">
                <img width={11} height={11} src="/img/cross.png" alt="Cross" />
              </button>
           </div>
        </div>
    );
}

export default Card;