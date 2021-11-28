import React from 'react'
import Headline from './Headline';

export default function HeadlineList({ headlines }) {
    return (
        headlines.map(headline => {
            return <Headline headline={headline} />
        })
    )
}
