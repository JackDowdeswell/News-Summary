import React, { useState } from 'react'

export default function HeadlineList({ headlines }) {
    return (
        headlines.map((headline) => {
            return (
                <>
                    <div className="container-sm">
                        <a className='headline-text' href={headline.webUrl}>{headline.webTitle}</a><br></br>
                    </div>

                </>
            )
        })


    )
};
