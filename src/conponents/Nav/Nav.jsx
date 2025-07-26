import React from 'react'
import './NavStyle.css'

function Nav() {
  return <section id='nav'>
    <div className='-brand'>
        <div className='-ham'>
            <img src="https://dummyimage.com/24x24/ccc/000" alt="" />
        </div>
        <div className='-logo'>
            <img src="https://dummyimage.com/97x20/ccc/000" alt="" />
        </div>
    </div>
    <div className='-center'>
        <div className='-search'>
            <div className='-search-box'>
            <input type="text" className='-search-input' />
        </div>
        <div className='-btn'>Q</div>
        </div>
        <div className='-voice'></div>
    </div>
    <div className='-end'>
        <div className='-end-item'>x</div>
        <div className='-end-item'>x</div>
        <div className='-end-item'>x</div>
    </div>
  </section>
}

export default Nav
