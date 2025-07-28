import React from 'react'
import { useEffect } from 'react';

function CardVideo({ content }) {
    useEffect(() => {
        console.log(content);
    }, []);

    const convertPublishDate = (date) => {
        const publishDate = new Date(date);
        const today = new Date();
        const differenceTime = today.getTime() - publishDate.getTime();
        const differenceDay = Math.floor(differenceTime / 86400000); // แปลงเป็นจำนวนเต็ม
        return differenceDay;
    };

    const convertView = (viewCount) => {
        let text_view_count = ""; // Initializes an empty string to store the formatted view count

        // Checks if viewCount is between 1,000 and 9,999 (inclusive of 1,000)
        if (viewCount >= 1000 && viewCount < 10000) {
            viewCount /= 1000; // Divides viewCount by 1,000
            text_view_count = viewCount + " พัน ครั้ง"; // Appends " พัน ครั้ง" (thousand times)
        }
        // Checks if viewCount is between 10,000 and 99,999 (inclusive of 10,000)
        else if (viewCount >= 10000 && viewCount < 100000) {
            viewCount /= 10000; // Divides viewCount by 10,000
            text_view_count = viewCount + " หมื่น ครั้ง"; // Appends " หมื่น ครั้ง" (ten thousand times)
        }
        // Checks if viewCount is between 100,000 and 999,999 (inclusive of 100,000)
        else if (viewCount >= 100000 && viewCount < 1000000) {
            viewCount /= 100000; // Divides viewCount by 100,000
            text_view_count = viewCount + " แสน ครั้ง"; // Appends " แสน ครั้ง" (hundred thousand times)
        }
        // Checks if viewCount is 1,000,000 or greater
        else if (viewCount >= 1000000) {
            viewCount /= 1000000; // Divides viewCount by 1,000,000
            text_view_count = viewCount + " ล้าน ครั้ง"; // Appends " ล้าน ครั้ง" (million times)
        }
        // If none of the above conditions are met (i.e., viewCount is less than 1,000)
        else {
            text_view_count = viewCount + " ครั้ง"; // Appends " ครั้ง" (times) directly
        }

        return text_view_count; // Returns the formatted string
    };


    return (
        <div className='card'>
            <div className='thumb'>
                <img src={content.video_thumbnail} alt="" />
            </div>
            <div className='about'>
                <div className='channel-img'>
                    <img src={content.channel_profile_picture} alt="" />
                </div>
                <div className='detail'>
                    <div className='title'>{content.video_title}</div>
                    <div className='channel'>{content.channel_name}</div>
                    <div className='view'>{convertView(content.view_count)} · {" "}
                        {convertPublishDate(content.video_created_at)} วันที่ผ่านมา</div>
                </div>
            </div>
        </div>
    );
}

export default CardVideo