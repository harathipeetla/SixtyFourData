import {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SelectCountry from '../SelectCountry'

import './index.css'

const slidebarCardsList = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713967777/20289200_6242958_lim39t.jpg',
    title: 'State of Markets',
    description:
      'The market capitalization Indian stocks crossed US$4.5 trillion in january',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713968160/surge_q40ceq.jpg',
    title: 'The Central Capex Surge',
    description:
      'The last few years have seen a very substantial step up in capital',
  },

  {
    id: 3,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713968563/12553950_4988790_tfkfph.jpg',
    title: 'Direct tax and Bussiness cycle',
    description:
      'The Share of direct taxes in total tax collections of the Central government is.',
  },

  {
    id: 4,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/c_thumb,w_200,g_face/v1713968867/35262247_8292062_hfipzg.svg',
    title: 'Banking Monitor',
    description:
      'Credit grwoth has remained broadly stable in recent weeks at just',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1713969438/12084781_20943930_c7ejzw.svg',
    title: 'Retail',
    description:
      'Enhance your retail engagement with a seamless omnichannel loyalty program',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dzvtpzf6b/image/upload/c_thumb,w_200,g_face/v1713969216/gruoping_kfncnu.jpg',
    title: 'Groups & Conglomerates',
    description:
      'Bring operational efficiency across large conglomerates with multiple brands',
  },
]

const CardSlider = () => {
  const [isbuttonclicked, onClickView] = useState(true)
  const toggle = () => onClickView(!isbuttonclicked)

  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  const settings2 = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="total-view">
      <div className="body-container landscape">
        <div
          className="carousel-container"
          style={{overflow: isbuttonclicked ? 'hidden' : 'scroll'}}
        >
          {isbuttonclicked ? (
            <div className="mt-20">
              <Slider {...settings}>
                {slidebarCardsList.map(eachItem => (
                  <div className="cards-container cards-container-mar">
                    <div>
                      <img src={eachItem.image} alt="" className="image" />
                    </div>
                    <div>
                      <h1 className="title">{eachItem.title}</h1>
                      <p className="description">{eachItem.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="view-container">
              {slidebarCardsList.map(eachItem => (
                <div className="cards-container mar">
                  <div>
                    <img src={eachItem.image} alt="" className="image" />
                  </div>
                  <div>
                    <h1 className="title">{eachItem.title}</h1>
                    <p className="description">{eachItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={toggle} className="view-button" type="button">
            {isbuttonclicked ? 'view more' : 'view less'}
          </button>
        </div>
        <SelectCountry />
      </div>
      <div className="body-container potrait">
        <div
          className="carousel-container"
          style={{overflow: isbuttonclicked ? 'hidden' : 'scroll'}}
        >
          {isbuttonclicked ? (
            <div className="mt-20">
              <Slider {...settings2}>
                {slidebarCardsList.map(eachItem => (
                  <div className="cards-container cards-container-margin">
                    <div>
                      <img src={eachItem.image} alt="" className="image" />
                    </div>
                    <div>
                      <h1 className="title">{eachItem.title}</h1>
                      <p className="description">{eachItem.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="view-container">
              {slidebarCardsList.map(eachItem => (
                <div className="cards-container margin">
                  <div>
                    <img src={eachItem.image} alt="" className="image" />
                  </div>
                  <div>
                    <h1 className="title">{eachItem.title}</h1>
                    <p className="description">{eachItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={toggle} className="view-button" type="button">
            {isbuttonclicked ? 'view more' : 'view less'}
          </button>
        </div>
        <SelectCountry />
      </div>
    </div>
  )
}

export default CardSlider
