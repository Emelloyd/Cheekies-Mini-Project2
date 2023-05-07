import Carousel from "react-bootstrap/Carousel";
import "./Carousel/PizzaCarousel";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-all carousel-item-one">
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./asset/img/bgpizza.png"
        alt="pizzafloat"
        />
        </div>
        <Carousel.Caption>
        <section>
        <div  className="cd-intro" col-lg-6 text-center text-lg-end overflow-hidden>
          <h3>The best quality ingredients</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link href="" class="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-two">
      <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./asset/img/bgpizza3.png"
        alt="pizzafloat2"
        />
        </div>
        <Carousel.Caption>
          <h1 cd-headline rotate1 display-3 text-white animated slideInLeft>Enjoy Our Delicious Meal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="" class="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft">ORDER NOW!</Link>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-three">
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./asset/img/bgpizza2.png"
        alt="pizzafloat"
        />
        </div>
        <Carousel.Caption>
        <section>
        <div  className="cd-intro" col-lg-6 text-center text-lg-end overflow-hidden>
          <h3>The best quality ingredients</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link href="" class="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
    </Carousel>

  );
};

export default Home;
