import React, { useState } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {

    const [openNavbar, setOpenNavbar] = useState(false)


  return (
    <div className='nav'>
        <nav>

            <div className="nav--left">
                <div className='nav--left--first'>
                <img src="/img/logo.png" alt="" />
            </div>

            <div className='nav--left--second'>
                <a href="">About Us</a>
                <a href="">Features</a>
                <a href="">For Business</a>
            </div>
            </div>


            <div className='nav--right'>
                <a className='started--button' href="">Sign up</a>
            </div>

            {openNavbar
            ?   <div className="open--nav">
                <div className="links--container">
                    <div className="link"><img src="/img/home-line.svg" alt="" /><a href="">Home</a></div>
                    <div className="link"><img src="/img/material.svg" alt="" /><a href="">Features</a></div>
                    <div className="link"><img src="/img/briefcase.svg" alt="" /><a href="">For Business</a></div>
                    <div className="link"><img src="/img/circle.svg" alt="" /><a href="">About Us</a></div>
                    <div className="link"><img src="/img/login.svg" alt="" /><a href="">Sign Up</a></div>
                </div>

                </div>
            :   ''  }

            <div className="burger">
                <a onClick={() => {setOpenNavbar(prevMode => !prevMode)}} ><img src="/img/Button.png" className='button' alt="" /></a>
            </div>

        </nav>
    </div>
    
  )
}

export default Navbar
