import React from 'react'
import { useEffect } from 'react';

function CardShorts({content}) {
  return (
    <div className='short'>
            <div className='thumb'>
              <img src={content.video_thumbnail} alt="" />
            </div>
            <div className='about'>
              <div className='detail'>
                 <a href="" className='title'>
                  {content.video_title}
                 </a>
                 <div className='view'>การดู 1.2 ล้านครั้ง</div>
              </div>
            </div>
          </div>
  );
}

export default CardShorts