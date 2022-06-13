import React from "react";
import Navbar from "./Navbar";
function Home(){
    return(
        <>
            <marquee><h1>Hotel </h1></marquee>
            <Navbar/>
            <br/>
            <div id="Hotels" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#Hotels" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#Hotels" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#Hotels" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#Hotels" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#Hotels" data-bs-slide-to="4"></button>
            </div>

            
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="http://www.johansens.com/wp-content/uploads/2016/05/SA-Colombia-Cartagena-de-Indias-Bastion-Luxury-Hotel-1.jpg" alt="Hotel1" className="d-block w-100" height="600" width="80%"/>
            </div>
            <div className="carousel-item">
                <img src= "https://static1.therichestimages.com/wordpress/wp-content/uploads/2014/10/Luxury-e1414600211973.jpg" alt="Hotel2" className="d-block w-100" height="600" width="80%"/>
            </div>
            <div className="carousel-item">
                <img src="http://exilim-tours.com/wp-content/uploads/2020/03/luxury-five-star-hotel-uae.jpg" alt="Hotel4" className="d-block w-100" height="600" width="80%"/>
            </div>
            <div className="carousel-item">
                <img src="https://antonovich-design.ae/uploads/gallery/2017/7/2017sKcIKpZ1uiWm.jpg" alt="Hotel5" className="d-block w-100" height="600" width="80%"/>
            </div>
            <div className="carousel-item">
                <img src="https://aznmodern.com/wp-content/uploads/2014/05/1512039_10152474586023115_6914827611148906625_o-1050x700.jpg" alt="Hotel3" className="d-block w-100" height="600" width="80%"/>
            </div>
            
            </div>

        
            <button className="carousel-control-prev" type="button" data-bs-target="#Hotels" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Hotels" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
            <button className="carousel-control-prev" type="button" data-bs-target="#Hotels" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Hotels" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Hotels" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
        </div>
        <br/>
        <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/customer/customar1.png" height="400" width="800"/>
                        <p align="Center" style={{fontSize: "20px"}}><i>25 Years of Service
        Experience</i></p>
                        </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <p align="Center" style={{fontSize: "20px"}}><i>Make the customer the hero of your story<br/>
        Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod tempor inc.<br/>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</i></p>
                        
                    </div>
                </div>
                </div>
            <br/><br/>
        <p align="Center" style={{fontSize: "40px"}}><i>Our Rooms</i></p>

        <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room1.jpg" height="400" width="500"/>
                        <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>
        $150 / par night</i></p>
                        </div>
                </div>
        
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room2.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>
        $150 / par night</i></p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room3.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>$150 / par night</i></p>
                        
                    </div>
                </div>
                </div>
                <br/>


                <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room4.jpg" height="400" width="500"/>
                        <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>
        $150 / par night</i></p>
                        </div>
                </div>
        
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room2.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>
        $150 / par night</i></p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/rooms/room3.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>Classic Double Bed<br/>$150 / par night</i></p>
                        
                    </div>
                </div>
                </div>
                <br/><br/>
                <div className="container text-center">
            <a href="https://technext.github.io/marian/index.html#" className="btn btn-info btn-lg" align="Center" style={{fontSize: "35px"}}>Click here</a>
                <br/><br/>
            </div>

                <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://static.designmynight.com/uploads/2020/08/The-Cocktail-Bar-at-The-Merchant-Hotel-1-optimised.jpg" height="400" width="800"/>
                        <p align="Center" style={{fontSize: "20px"}}></p>
                        </div>
                </div>
        
                <div className="card">
                    <div className="card-body">
                    <p align="Center" style={{fontSize: "20px"}}><i><b>OUR RESTURENT</b><br/>Dining & Drinks<br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.</i></p>
                        
                    </div>
                </div>
                </div>
                <br/>


                <div className="card-group">   
                <div className="card">
                    <div className="card-body">
                    <p align="Center" style={{fontSize: "20px"}}><i><b>OUR POOL</b><br/>Swimming Pool<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud.</i></p>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <img src="https://i1.wp.com/www.onceinalifetimejourney.com/wp-content/uploads/2015/12/W-Hotel-Singapore-Pool.jpg?resize=1024%2C685&ssl=1" height="400" width="800"/>
                        <p align="Center" style={{fontSize: "20px"}}></p>
                        </div>
                </div>
                </div>
                <br/>
                <br/>


                
                <p align="Center" style={{fontSize: "40px"}}><i>Our Blog</i></p>
                <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/our_blog/blog-img1.jpg" height="400" width="500"/>
                        <p align="Center" style={{fontSize: "20px"}}><i>5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</i></p>
                        </div>
                </div>
        
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/our_blog/blog-img2.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</i></p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-body ">
                        <img src="https://technext.github.io/marian/assets/img/our_blog/blog-img3.jpg" height="400" width="500"/>
                    <p align="Center" style={{fontSize: "20px"}}><i>5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</i></p>
                        
                    </div>
                </div>
                </div>
                <br/><br/>
                <div className="card-group">
            
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/gallery/gallery1.jpg" height="100%" width="100%"/>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-body">
                        <img src="https://technext.github.io/marian/assets/img/gallery/gallery2.jpg" height="100%" width="100%"/>
                    </div>
                </div>
            
                <div className="card">
                    <div className="card-body">
                    <img src="https://technext.github.io/marian/assets/img/gallery/gallery3.jpg" height="100%" width="100%"/>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Home;