import React from 'react'

export default function HeadlineList({ headlines }) {
    return (
        headlines.map((headline) => {
            return (
                <>
                    <div className="container-sm article">
                        <div className="inner-box container-sm">
                            <img src={headline.fields.thumbnail} alt="guardian article" /><br></br>
                            <a className='headline-text' href={headline.webUrl}>{headline.webTitle}</a>
                        </div>
                    </div>

                </>
            )
        })


    )
};
