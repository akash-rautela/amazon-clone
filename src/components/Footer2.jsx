const Footer2 = () => {
    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div
                    style={{
                        backgroundColor: "#37475a",
                        color: "white",
                        textAlign: "center",
                        padding: 15,
                        cursor: "pointer"
                    }}
                >
                    Back to top
                </div>
                <footer style={{ backgroundColor: "#232f3e", padding: "40px 250px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            marginBottom: 30
                        }}
                    >
                        <div style={{ minWidth: 200, marginBottom: 20 }}>
                            <h3 style={{ fontSize: 16, marginBottom: 10, color: "#fff" }}>
                                Get to Know Us
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Careers
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>Blog</li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    About Amazon
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Investor Relations
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Amazon Devices
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Amazon Science
                                </li>
                            </ul>
                        </div>
                        <div style={{ minWidth: 200, marginBottom: 20 }}>
                            <h3 style={{ fontSize: 16, marginBottom: 10, color: "#fff" }}>
                                Make Money with Us
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Sell products on Amazon
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Sell on Amazon Business
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Sell apps on Amazon
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Become an Affiliate
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Advertise Your Products
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Self-Publish with Us
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Host an Amazon Hub
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    › See More Make Money with Us
                                </li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div style={{ minWidth: 200, marginBottom: 20 }}>
                            <h3 style={{ fontSize: 16, marginBottom: 10, color: "#fff" }}>
                                Amazon Payment Products
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Amazon Business Card
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Shop with Points
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Reload Your Balance
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Amazon Currency Converter
                                </li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div style={{ minWidth: 200, marginBottom: 20 }}>
                            <h3 style={{ fontSize: 16, marginBottom: 10, color: "#fff" }}>
                                Let Us Help You
                            </h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Amazon and COVID-19
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Your Account
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Your Orders
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Shipping Rates &amp; Policies
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Returns &amp; Replacements
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>
                                    Manage Your Content and Devices
                                </li>
                                <li style={{ fontSize: 14, marginBottom: 8, color: "#ddd" }}>Help</li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom part */}
                </footer>
                <div></div>
                <div style={{ backgroundColor: "#232f3e", padding: "40px 0px", minHeight: "100px", textAlign: "center"}}>
                    <hr style={{color: 'white'}}/>
                    <img src="images/amalogo.png" alt="" style={{height: "35px", marginTop: "15px", marginRight: "150px"}} />
                    <div className="btn btn-outline-secondary ms-3"  style={{width: "100px", color: 'white'}}>amazon</div>
                    <div className="btn btn-outline-secondary ms-3"  style={{width: "200px", color: 'white'}}>$ USD-U.S,Dollar</div>
                    <div className="btn btn-outline-secondary ms-3 "  style={{minWidth: "100px", color: 'white'}}>United States</div>
                </div>
            </div>
        </>
    );
}

export default Footer2;