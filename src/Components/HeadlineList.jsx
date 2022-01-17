import React from 'react'

export default function HeadlineList({ headlines }) {
    return (
        headlines.map((headline) => {
            return (
                <>
                    {/* <div className="container-sm article">
                        <div className="inner-box container-sm">
                            <img src={headline.fields.thumbnail} alt="guardian article" /><br></br>
                            <a className='headline-text' href={headline.webUrl}>{headline.webTitle}</a>
                        </div>
                    </div> */}
                    <div className="card">
                        <img src={headline.fields.thumbnail} className="card-img-top" alt="guardian article" />
                        <div className="card-body">
                            <h5 className="card-title">{headline.webTitle}</h5>
                            <a href={headline.webUrl} className="btn btn-primary">Visit article page</a>
                        </div>
                    </div>

                </>
            )
        })


    )
};
