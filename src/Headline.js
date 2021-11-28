import React from 'react'

export default function Headline({ headline }) {
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
