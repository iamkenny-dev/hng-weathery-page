import React from 'react'

export default function HeroBody() {
  return (
    <div>
      <div className="hero--body--container">

        <div className="weather--wrap">
          <div className="weather--updates--wrapper">
            <div className="weather--updates--left">
              <h1>Weather Updates for Bangkok, Thailand</h1>
              <p>Updated a minute ago</p>
            </div>

            <div className="weather--daily">
              <p>Daily</p>
              <img src="/img/arrow.png" alt="" />
            </div>
          </div>
        </div>
          

          <div className="weather--updates--body">

            <div className="hourly--updates-wrapper">
              <div className="hourly--updates--container">
                <h1>Hourly Updates</h1>
                <div className="hourly--boxes">

                  <div className="hourly--time">
                    <h4>9:00am</h4>
                    <p>Today, Thursday</p>
                  </div>

                  <div className="cloudy--icon">
                    <img src="img/rainy.png" alt="" />
                    <p>Rainy</p>
                  </div>
                  <hr className='single--footer--line' />
                </div>

                <div className="hourly--boxes">

                  <div className="hourly--time">
                    <h4>10:00am</h4>
                    <p>Today, Thursday</p>
                  </div>

                  <div className="cloudy--icon">
                    <img src="img/rainy.png" alt="" />
                    <p>Rainy</p>
                  </div>
                  <hr />
                </div>

                <div className="hourly--boxes">

                  <div className="hourly--time">
                    <h4>11:00am</h4>
                    <p>Today, Thirsday</p>
                  </div>

                  <div className="cloudy--icon">
                    <img src="img/cloudy.png" alt="" />
                    <p>Rainy</p>
                  </div>
                  <hr />
                </div>

                <div className="hourly--boxes">

                  <div className="hourly--time">
                    <h4>12:00am</h4>
                    <p>Today, Thirsday</p>
                  </div>

                  <div className="cloudy--icon">
                    <img src="img/sunny.png" alt="" />
                    <p>Rainy</p>
                  </div>
                  <hr />
                </div>

                <div className="hourly--boxes">

                  <div className="hourly--time">
                    <h4>1:00pm</h4>
                    <p>Today, Thirsday</p>
                  </div>

                  <div className="cloudy--icon">
                    <img src="img/sunny.png" alt="" />
                    <p>Rainy</p>
                  </div>
                  <hr />
                </div>

              </div>
            </div>

            <div className="Risks--wrapper">
              <div className="Risks--container">
                <h1>Risks</h1>

                <div className="box--wrapper">
                    
                    <div className="box--wrapper--left">
                      <img src="img/flood.png" alt="" />

                      <div className="box--wrapper--left--text">
                        <h4>Flood</h4>
                        <p>Today, 11/23/2022</p>
                      </div>
                    </div>

                    <div className="box--wrapper--right">

                      <div className="box--wrapper--right--text">
                       <h4>HIGH</h4>
                       <p>from 3:00pm to 6:00pm</p>
                      </div>
                    </div>

                </div>

                <div className="box--wrapper">
                    
                    <div className="box--wrapper--left">
                      <img src="img/dusty.png" alt="" />

                      <div className="box--wrapper--left--text">
                        <h4>Flood</h4>
                        <p>Today, 11/23/2022</p>
                      </div>
                    </div>

                    <div className="box--wrapper--right">
                      

                      <div className="box--wrapper--right--text">
                       <h4>HIGH</h4>
                       <p>from 3:00pm to 6:00pm</p>
                      </div>
                    </div>

                </div>

                <div className="box--wrapper">
                    
                    <div className="box--wrapper--left">
                      <img src="/img/fog.png" alt="" />

                      <div className="box--wrapper--left--text">
                        <h4>Flood</h4>
                        <p>Today, 11/23/2022</p>
                      </div>
                    </div>

                    <div className="box--wrapper--right">

                      <div className="box--wrapper--right--text">
                       <h4>HIGH</h4>
                       <p>from 3:00pm to 6:00pm</p>
                      </div>
                    </div>

                </div>

                <div className="box--wrapper">
                    
                    <div className="box--wrapper--left">
                      <img src="/img/burn.png" alt="" />

                      <div className="box--wrapper--left--text">
                        <h4>Flood</h4>
                        <p>Today, 11/23/2022</p>
                      </div>
                    </div>

                    <div className="box--wrapper--right">

                      <div className="box--wrapper--right--text">
                       <h4>HIGH</h4>
                       <p>from 3:00pm to 6:00pm</p>
                      </div>
                    </div>

                </div>

              </div>
            </div>

          </div>
      </div>
    </div>
  )
}


