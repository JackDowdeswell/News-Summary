import React from 'react'
// import HeadlineModel from './Components/Utils/Headline.model';

export default function Headline({ headline }) {

    // const { title, image, _id } = headline;
    return (
        <>
            <div>
                {headline.image}
            </div>
            <div>
                {headline.title}
            </div>
        </>
    )
}