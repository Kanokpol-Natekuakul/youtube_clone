import React from 'react'

function CardSearch({result}) {
  return (
    <div className="card">
          <div className="-thumb"> 
            <img src={result.video_thumbnail} alt="" /> 
          </div>
          <div className="-about"> 
            <div className="-detail"> 
              <div className="-title">{result.video_title}</div>  
              <div className="-view"></div>    
              <div className="-channel">      
                <div className="-channel-img">
                  <img src={result.channel_profile_picture} alt="" />
                  </div> 
                <div className="-channel-name">{result.channel_name}</div> 
              </div>
            </div>
            <div className="-caption"></div>
            <div className="-option"></div>
          </div>
        </div>
  )
}

export default CardSearch