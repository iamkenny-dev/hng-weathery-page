import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className="hero--image--container">
          <div className='image--div'>
            <img src="img/hng-water.jpg" className='hero--image' alt="" />
          </div>
            
            <div className="hero--text--container">
              <div className="hero--text">
                <div className="clear--text">
                  <img src="img/scatterad-thunderstorm.png" alt="" />
                  <h3 className=''>CLEAR</h3>
                </div>
                <h1 className=''>Expect rain shower between 11:00am and 1:00pm in Signapore</h1>
              </div>
              <div className="hero--buttons">
                <button className='black--button'>View more</button>
                <button className='orange--button'>Get App</button>
              </div>
            </div>
        </div>
    </div>
  )
}
