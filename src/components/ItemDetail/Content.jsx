import React from "react"

const Content = ({overview, characters, review, clicked}) => {
    return (
        <>
           {clicked === 'overview' ? overview : clicked === 'characters' ? characters : clicked === 'review' ? review : characters}
        </>
    )
}

export default Content