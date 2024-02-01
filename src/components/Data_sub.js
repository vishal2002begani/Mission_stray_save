import React from 'react'

const Data_sub = (props) => {
  return (
    <>
      <div className="card">
            <img src={props.img} alt="dog logo"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div>
    </>
  )
}

export default Data_sub
