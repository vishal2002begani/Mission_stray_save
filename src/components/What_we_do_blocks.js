import React from 'react'

const What_we_do_blocks = (props) => {
    return (
        <>
            <div className="container col-md-6 " style={{ height: "400px" }}>
                <div>
                </div>
                <div class="card mb-3" style={{ maxwidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={props.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default What_we_do_blocks
