import React from 'react'
import black_dogs from "../components/images/black-dogs-2.png"
import bird from '../components/images/bird.png'
import help_animal from "../components/images/help-animal-main.png"
const Carousel = () => {
  return (
    <div>
      
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={black_dogs} className="d-block w-50" align="right" alt="..."/>
                <div className="carousel-caption text-left w-50">
                    <h1 className="textcontent">A BETTER LIFE FOR INDIA’S STRAY ANIMALS</h1>
                    <p className="textcontent">Stray animals roam the streets of India without food, veterinary care or
                        refuge from the elements. Help us give them a chance.</p>
                    <ul>
                        <li style={{"list-style":"none"}}>
                            <button className="btn don carousel-btn" type="submit">Donate</button>
                        </li>
                        <li style={{"list-style": "none"}}>
                            <button className="btn don carousel-btn" type="submit">Adopt</button>
                        </li>
                    </ul>
    
                </div>
            </div>
            <div className="carousel-item">
                <img src={bird} className="d-block w-60" align="right" style={{height: "60px", position: "relative",top:"230px" }}alt="..."/>
                <div className="carousel-caption text-align w-50">
                    <h1 className="textcontent">HOUSING, CARE & MORE FOR INDIA'S MOST VULNERABLE</h1>
                    <p className="textcontent">StraySaver works alongside India’s local shelters to rescue, rehabilitate,
                        vaccinate, and house these strays in need.</p>
                    <ul>
                        <li style={{listStyle: "none"}}>
                            <button className="btn don carousel-btn" type="submit">Donate</button>
                        </li>
                        <li style={{listStyle: "none"}}>
                            <button className="btn don carousel-btn" type="submit">Adopt</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="carousel-item">
                <img src={help_animal} className="d-block w-20 img-fluid" align="right" alt="..."/>
                <div className="carousel-caption w-50" align="left" style={{paddingRight: "50px"}}>
                    <h1 className="textcontent">ANIMAL PROTECTION IS EDUCATION TO HUMANITY</h1>
                    <p className="textcontent" style={{marginBottom: "5px"}}>The greatness of a nation can be judged by the
                        way its animals are treated.</p>
                    <p className="textcontent">- Mahatma Gandhi</p>
    
                    <ul>
                        <li style={{listStyle: "none"}}>
                            <button className="btn don carousel-btn" type="submit">Donate</button>
                        </li>
                        <li style={{listStyle: "none"}}>
                            <button className="btn don carousel-btn" type="submit">Adopt</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carousel
