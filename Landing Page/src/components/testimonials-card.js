import React from 'react'

import PropTypes from 'prop-types'

import './testimonials-card.css'

const TestimonialsCard = (props) => {
  return (
    <div className="testimonials-card-container">
      <div className="testimonials-card-container1">
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="testimonials-card-image"
        />
        <div className="testimonials-card-container2">
          <span className="testimonials-card-text lead1">{props.text}</span>
          <span className="subtitle1">{props.text1}</span>
          <span className="testimonials-card-text2 lead2">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialsCard.defaultProps = {
  image_alt1: 'image',
  text2: 'Farmer, Kitui',
  text1: 'Morio Kisilu',
  text: 'After many years of seeking solutions with no avail, the shambaSmart team gave the tools, knowledge and support I needed to scale my farming business.',
  image_src1: '/playground_assets/quote-mark.svg',
}

TestimonialsCard.propTypes = {
  image_alt1: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
}

export default TestimonialsCard
