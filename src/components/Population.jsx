import React from 'react'

export default function Population() {
  return (
    <div>
      <div className="weather--population--wrapper">
        <div className="population--container">

         <div className="population--container--head">
            <div className="population--container--content--head">
                <h1>Popular locations</h1>
                <p>Updated a minute ago</p>
            </div>

            <div className="search--population">

            </div>

            <div className="population--locations">

              <div className="population--states--container">
                <div className="population--states">
                    <img src="/img/marker-pin.png" alt="" />
                    <h4>Tokyo, Japan</h4>
                </div>

                <p>SUNNY</p>
                <h1>Expect Warmth.</h1>
                <p className='viewmore'>View more info --</p>
              </div>

              <div className="population--states--container">
                <div className="population--states">
                    <img src="/img/marker-pin.png" alt="" />
                    <h4>Mumbai, India</h4>
                </div>

                <p>SUNNY</p>
                <h1>Expect Heat.</h1>
                <p className='viewmore'>View more info --</p>
              </div>

              <div className="population--states--container">
                <div className="population--states">
                    <img src="/img/marker-pin.png" alt="" />
                    <h4>Singapore, Singapore</h4>
                </div>

                <p>Partly Cloudy</p>
                <h1>Expect Cloudy Sky.</h1>
                <p className='viewmore'>View more info --</p>
              </div>
                
            </div>
         </div>

         <div className="population--tail">

            <h1>Tropical Cities in Asia</h1>

            <div className="population--tail--location-container">

                <div className="population--tail--rows">

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Bangkok</h1>
                            <p>Thailand</p>
                        </div>
                    </div>

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Tokyo</h1>
                            <p>Japan</p>
                        </div>
                    </div>

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Hong Kong</h1>
                            <p>China</p>
                        </div>
                    </div>
                </div>

                <div className="population--tail--rows">

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Wuhan</h1>
                            <p>China</p>
                        </div>
                    </div>

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Singapore</h1>
                            <p>Singapore</p>
                        </div>
                    </div>

                    <div className="population--tail--contents">

                        <img src="/img/location.png" alt="" />

                        <div className="location--states">
                            <h1>Mumbai</h1>
                            <p>India</p>
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

