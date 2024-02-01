import React from 'react'
const Info_sub = (props) => {
    return (
        <>
            <div className="infocard">
                <img src={props.image} alt="dog logo" />
                <p>{props.saved}</p>
                <div className="infocard-detail">saved animals</div>
            </div>
        </>
    )
}
export default Info_sub
