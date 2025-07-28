import React, { useEffect, useState } from 'react'
import './SidebarStyle.css'


function Sidebar() {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
    const fetchSubscribe = async () => {
      const data = await fetch("http://localhost:3000/subscribe?user_id=1");
      const json = await data.json();
      setSubscribe(json);
    };
    fetchSubscribe();
  }, []);
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
    <div className='side-sec'>
      <div className='text'>การติดตาม</div>

      {subscribe.map((sub, index) => (
        <a href="#!" className="item" key={sub.id || sub.channel_name || index}>
          <div className="icon"><img src={sub.channel_profile_picture} /></div>
          <div className="text">{sub.channel_name}</div>
        </a>
      ))}
    </div>
  </section>
}

export default Sidebar
