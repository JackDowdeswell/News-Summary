import React from 'react'
import Headline from '../Headline';
// import headlineData from '../HeadlineData.json';

export default function HeadlineList({ headlines }) {
    return (
        headlines.map(headline => {
            return <Headline headline={headline} />
        })
    )
}