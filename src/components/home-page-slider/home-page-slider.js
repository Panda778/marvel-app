import './home-page-slider.css'
import Slider from "react-slick";
import slider1 from '../../images/slider-1.jpg'
import slider2 from '../../images/slider-2.jpg'

function HomePageSlider() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="home-page-slider">
            <Slider {...settings}>
                <div className="home-page-slider__item">
                    <div className="home-page__slide first"></div>
                </div>
                <div className="home-page-slider__item">
                    <div className="home-page__slide second"></div>
                </div>

            </Slider>
        </div>
    );
}




export default HomePageSlider