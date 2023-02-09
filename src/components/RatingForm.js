import React, { useState } from 'react'
import './RatingForm.css'
import IconStar from '../assets/images/icon-star.svg'
import ThankYouImage from '../assets/images/illustration-thank-you.svg'

function RatingForm() {
  const [ratingList, setRatingList] = useState([1, 2, 3, 4, 5])
  const [active, setActive] = useState(null);
  const [submittedRating, setSubmittedRating] = useState(null)

  return (
    <>
      {
        submittedRating === null ? 
        <div className='rating-form'>
          <img className='rating-form__icon' src={IconStar} alt='Star Icon'></img>
          <h1 className='rating-form__title'>How did we do?</h1>
          <p className='rating-form__paragraph'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
    
          <div className='rating-form_action'>
            <div className='rating-form_action-button'>
              {
                ratingList.map(item => 
                <button
                  key={`rating-list-${item}`}
                  onClick={() => setActive(item)}
                  className={active === item && 'active'}
                >
                  {item}
                </button>)
              }
            </div>
            <div className='rating-form_action-submit'>
              <button
                onClick={() => active && setSubmittedRating(active)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        :
        <div className='rating-form-thanks'>
          <img
            src={ThankYouImage}
            alt="Thank You"
            className='rating-form-thanks-image'
          />
          <div className='rating-form-thanks-result'>
            {
              `You Selected ${active} out of ${ratingList.length}`
            }
          </div>
          <p className='rating-form-thanks-title'>
            Thank You!
          </p>
          <p className='rating-form-thanks-paragraph'>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      }
    </>
  )
}

export default RatingForm