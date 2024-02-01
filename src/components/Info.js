import React from 'react'
import catdog from "../components/images/catdog.png"
import belt from "../components/images/belt.png"
import health from "../components/images/health.png"
import donation from "../components/images/donation.png"
import food from "../components/images/food.png"
import chain from "../components/images/chain.png"
import Info_sub from './Info_sub'
const Info = () => {
    return (
        <>
            <section className="glancedata">
                <h1>AT A GLANCE</h1>
                <section className="subglance">
                    <Info_sub image={catdog} saved={"1000+"} />
                    <Info_sub image={belt} saved={"50+"} />
                    <Info_sub image={health} saved={"850+"} />
                    <Info_sub image={donation} saved={"250+"} />
                    <Info_sub image={food} saved={"300+"} />
                    <Info_sub image={chain} saved={"100+"} />

                    <div className="infocard">
                        <img src="catdog.png" alt="dog logo" />
                        <p>1000+</p>
                        <div className="infocard-detail">saved animals</div>
                    </div>
                    <div className="infocard">
                        <img src={belt} alt="cat logo" />
                        <p>50+</p>
                        <div className="infocard-detail">dogs adopted and, 300 released</div>
                    </div>
                    {/*
                    <div className="infocard">
                        <img src="health.png" alt="cow & hen" />
                        <p>850+</p>
                        <div className="infocard-detail">animals saved and neutered</div>
                    </div>
                    <div className="infocard">
                        <img src="donation.png" alt="deer" />
                        <p>&#8377;250K+</p>
                        <div className="infocard-detail">of funding granted to 5 local shelters</div>
                    </div>
                    <div className="infocard">
                        <img src="food.png" alt="animal help" />
                        <p>300+</p>
                        <div className="infocard-detail">school children educated</div>
                    </div>
                    <div className="infocard">
                        <img src="chain.png" alt="animal help" />
                        <p>100+</p>
                        <div className="infocard-detail">animal abusers counseled</div>
                    </div> */}
                </section >
            </section >
        </>
    )
}

export default Info
