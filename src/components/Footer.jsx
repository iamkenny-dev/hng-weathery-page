import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
                <div className="footer--top">

                </div>
        <div className='bottom'>
            <div className="footer--head">
                <div className="footer--head--left">
                        <img src="/img/weather.png" alt="" />
                    <div className="footer--links--left">
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Weather News</a>
                        <a href="">For Business</a>
                        <a href="">FAQs</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>


                <div className="footer--head--right">
                    <h4>Download the mobile App</h4>
                    <div className="app--stores">
                        <div className="apple--app">
                            <img src="/img/app--store.png" alt="" />
                        </div>
                            <div className="google--app">
                                <img src="/img/google-play.png" alt="" />
                            </div>


                    </div>
                </div>
            </div>
            <hr />
            <div className="footer--foot">
                <div className="footer--foot--left">
                    <p>
                    © 2022 Weathery, All rights reserved to Team Gear
                    </p>
                </div>

                <div className="footer--foot--right">
                    <div className="footer--foot--right--images">
                        <img src="/img/web.png" alt="" />
                        <p>English</p>
                    </div>
                    <div className="footer--foot--right--images">
                        <img src="/img/country.png" alt="" />
                        <p>United Kingdom</p>
                    </div>
                    <div className="footer--foot--right--images">
                        <img src="/img/profile.png" alt="" />
                        <p>Customer Support</p>
                    </div>
                </div>

            </div>

        </div>
        </footer>

    </div>
  )
}

export default Footer