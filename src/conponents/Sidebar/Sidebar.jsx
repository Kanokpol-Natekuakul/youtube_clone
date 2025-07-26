import React from 'react'
import './SidebarStyle.css'


function Sidebar() {
  return <section id='side'>
    <div className='side-pmr'>
        <a href="#!" className='-item'>
          <div className='icon'><img src="https://dummyimage.com/24x24/ccc/000" alt="" /></div>
          <div className='text'>หน้าแรก</div>
        </a>
        <a href="#!" className='-item'>
          <div className='icon'><img src="https://dummyimage.com/24x24/ccc/000" alt="" /></div>
          <div className='text'>Shorts</div>
        </a>
        <a href="#!" className='-item'>
          <div className='icon'><img src="https://dummyimage.com/24x24/ccc/000" alt="" /></div>
          <div className='text'>การติดตาม</div>
        </a>
        
    </div>
  </section>
}

export default Sidebar
