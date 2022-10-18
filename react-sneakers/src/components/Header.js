function Header() {
    return (
        <header className="d-flex justify-between align-center"> 
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">e-Sneakers</h3>
            <p className="opacity-5">Best Sneaker Shop</p>
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
    );
}

export default Header;