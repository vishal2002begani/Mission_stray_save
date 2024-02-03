import React from 'react'

const Volunteer_data = (props) => {
    return (
        <>
            <div class="card mb-3 col-md-4 my-5 mx-5 flex" style={{width:"500px"}}>
                <img src={props.image} class="card-img-top" style={{ height:"300px",width:"300px"}}alt="..." />
                <div class="card-body">
                    <h5 class="card-title .container">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 m ago</small></p>
                </div>
            </div>
        </>
    )
}
export default Volunteer_data
