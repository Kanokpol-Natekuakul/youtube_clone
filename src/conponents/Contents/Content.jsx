import React, { useEffect, useState } from 'react'
import Tags from '../Tags/Tags'
import './ContentStyle.css'
import CardVideo from '../Card/CardVideo';
import CardShorts from '../Card/CardShorts';

function Content() {
  const [videos,setVideos] = useState([]);
const [shorts,setShorts] = useState([]);

useEffect(()=>{
  const fetchVideos =async()=>{
    const data = await fetch("http://localhost:3000/");
    const json = await data.json();
    setVideos(json);
  };
  const fetchShorts =async()=>{
    const data = await fetch("http://localhost:3000/");
    const json = await data.json();
    setShorts(json);
  };
  fetchVideos();
  fetchShorts();
},[]);
  return <section id='content'>
    <Tags></Tags>
    <section id='the-cards'>
      {videos.map((video,index)=>(
           <CardVideo key={index} content={video}></CardVideo>
        ))}
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='thumb'>
          <img src="https://dummyimage.com/480x270/ccc/000" alt="" />
        </div>
        <div className='about'>
          <div className='channel-img'>
            <img src="https://dummyimage.com/36x36/ccc/000" alt="" />
          </div>
          <div className='detail'>
            <div className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam, commodi, aperiam illum, officia aut cupiditate cum quam architecto asperiores fugiat ipsam eius quae! Aspernatur!</div>
            <div className='channel'>Borntodev</div>
            <div className='view'>การดู 4.6 แสนครั้ง · 4 วันที่ผ่านมา</div>
          </div>
        </div>
      </div>

     
    </section>
     <section id='shorts'>
        <div className='section-title'>[] Shorts</div>
        <div className='shorts-wrap'>
          {shorts.map((short,index)=>(
           <CardShorts key={index} content={short}></CardShorts>
        ))}
          <div className='short'>
            <div className='thumb'>
              <img src="https://dummyimage.com/270x480/ccc/000" alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore provident? Dolorum, voluptate! Ea praesentium libero, ipsa eum voluptatibus aut excepturi eos cum sunt? Asperiores!
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
          <div className='short'>
            <div className='thumb'>
              <img src="https://dummyimage.com/270x480/ccc/000" alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore provident? Dolorum, voluptate! Ea praesentium libero, ipsa eum voluptatibus aut excepturi eos cum sunt? Asperiores!
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
          <div className='short'>
            <div className='thumb'>
              <img src="https://dummyimage.com/270x480/ccc/000" alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore provident? Dolorum, voluptate! Ea praesentium libero, ipsa eum voluptatibus aut excepturi eos cum sunt? Asperiores!
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
          <div className='short'>
            <div className='thumb'>
              <img src="https://dummyimage.com/270x480/ccc/000" alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore provident? Dolorum, voluptate! Ea praesentium libero, ipsa eum voluptatibus aut excepturi eos cum sunt? Asperiores!
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
          <div className='short'>
            <div className='thumb'>
              <img src="https://dummyimage.com/270x480/ccc/000" alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore provident? Dolorum, voluptate! Ea praesentium libero, ipsa eum voluptatibus aut excepturi eos cum sunt? Asperiores!
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </section>
}

export default Content
