import React from 'react'
import Headline from '../Headline';
// import headlineData from '../HeadlineData.json';

export default function HeadlineList({ headlines }) {
    console.log(headlines)
    return (
        <>
            <div>
                {[headlines.length]}
            </div>
            <div>
                {/* {id} */}
            </div>
        </>
    )
}
