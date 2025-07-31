const MainBody = () => {
    return (<>
        <div className="container-fluid m-0 p-0" style={{ minHeight: "100px", background: "#e3e6e6" }}>
            <div id="carouselExample" className="carousel slide m-0 p-0">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="images/sld1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/sld2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/sld3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/sld4.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            <div className="row px-5 pb-3" style={{ height: "160px" }}>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px", textAlign: "left" ,transform: 'translateY(-280px)' }}>
                        <div className="h4">Get Your Game On</div>
                        <img src="images/r1b1.jpg" className="card-img-top" height="290px" alt="..." />
                        <div className="card-body m-0 ps-0">
                            <a href="#" style={{textDecoration:"none", fontSize: "12px", textAlign: "left", margin: "0px"}}>
                                Shop Gaming
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ minWidth: "340px", textAlign: "left" ,transform: 'translateY(-280px)' }}>
                        <div className="h4">Shop for Your Home </div>
                        <img src="images/r1b2.png" className="card-img-top" height="290px" alt="..." />
                        <div className="card-body m-0 ps-0">
                            <a href="#" style={{textDecoration:"none", fontSize: "12px", textAlign: "left", margin: "0px"}}>
                                Discover More in Home
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px", textAlign: "left" ,transform: 'translateY(-280px)' }}>
                        <div className="h4">Fashion trends you like</div>
                        <img src="images/r1b3.png" className="card-img-top" height="290px" alt="..." />
                        <div className="card-body m-0 ps-0">
                            <a href="#" style={{textDecoration:"none", fontSize: "12px", textAlign: "left", margin: "0px"}}>
                                Explore More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px", textAlign: "left" ,transform: 'translateY(-280px)' }}>
                        <h4>Top Categories in Kitchen Application</h4>
                        <img src="images/r1b4.png" className="card-img-top" height="260px" alt="..." />
                        <div className="card-body m-0 ps-0">
                            <a href="#" style={{textDecoration:"none", fontSize: "12px", textAlign: "left", margin: "0px"}}>
                                Explore all products in kitchen
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row mt-3 ps-5 pb-3" style={{ minHeight: "160px" }}>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading1</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 2</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 3</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 4</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ps-5 pb-3" style={{ minHeight: "160px" }}>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading1</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 2</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 3</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 4</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ps-5 mt-2 pb-3" style={{ minHeight: "160px" }}>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading1</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 2</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 3</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card ms-2 p-3" style={{ width: "340px" }}>
                        <h3>heading 4</h3>
                        <img src="images/aLogo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default MainBody;