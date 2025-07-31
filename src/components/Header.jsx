const Header = () => {
  return (
    <>
      <div className='container-fluid' style={{ minHeight: "100px", background: "#e3e6e6" }}>
        <div className='row ' style={{ height: "60px", background: "#131921" }}>
          <div className="col-sm-1">
            <img src="../public/images/aLogo.jpg" alt="" className='img-fluid' />
          </div>
          <div className="col-sm-1">
            <img src="../public/images/logo2.png" alt="" />
          </div>
          <div className="col-sm-6" style={{ background: "#131921" }}>
            <div className="row">
              <div className="col-sm-1 me-0 text-end p-0">
                <span>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle mt-2 text-dark"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ background: "#e6e6e6", textAlign: 'center', height: "40px", fontSize: "12px", borderRadius: "5px 0px 0px 5px" }}
                    >
                      <span>
                      </span>All
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-sm-10 text-left mt-2 p-0">
                <input
                  className="form-control m-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "0px 0px 0px 0px", height: "40px" }}
                />
              </div>
              <div className="col-sm-1 p-0">
                <img src="images/magni.png" alt="" className='mt-2' style={{ borderRadius: "0px 5px 5px 0px", height: "40px" }} />
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ background: "#131921", border: 'none', textAlign: 'center', fontWeight: 'bold', lineHeight: "40px" }}
              >
                <span>
                  <img src="images/usa.png" alt="" height="10px" className='me-1' />
                </span>EN
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-sm-1">
            <p className='text-light m-0 mt-2' style={{ fontSize: "12px" }}>Hello, sign in</p>
            <p className='text-light m-0 dropdown-toggle' data-bs-toggle="dropdown" style={{ fontSize: "14px", fontWeight: "bolder" }}>Account & lists</p>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-1 pt-2">
            <div className="row" style={{ height: "20px" }}>
              <div className=' col-sm-12 text-light mb-0 text-center' style={{ fontSize: "14px" }} >Returns </div>
            </div>
            <div className="row mt-0" style={{ height: "16px" }}>
              <div className='col-sm-12 text-light pt-0 text-center' style={{ fontSize: "14px", lineHeight: "18px", fontWeight: "bolder" }}>&orders</div>
            </div>

          </div>
          <div className="col-sm-1">
            <img src="images/cart.png" alt="" />
          </div>
        </div>
        <div className='row' style={{ height: "40px", background: "#232f3e" }}>
          <nav className="navbar navbar-expand-lg p-0 text-light">
            <div className="container-fluid">
              <a className="navbar-brand  text-light ms-2" href="#" style={{fontSize: "14px", fontWeight: "bolder"}}>
                <img src="images/trio.png" alt="" />All
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link text-light" aria-current="page" href="#" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Today's Deals
                  </a>
                  <a className="nav-link text-light" href="#" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Registry
                  </a>
                  <a className="nav-link text-light" href="#" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Prime Video
                  </a>
                  <a className="nav-link text-light" href="#" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Gift Cards
                  </a>
                  <a className="nav-link text-light" href="#" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Customer Service 
                  </a>
                  <a className="nav-link  text-light" style={{fontSize: "12px", fontWeight: "bold"}}>
                    Sell
                  </a>
                </div>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </>
  )
}

export default Header
