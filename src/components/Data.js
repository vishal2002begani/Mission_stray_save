import React from 'react'
import Data_sub from './Data_sub'
import Dog from '../components/images/dog.png'
import Cat from '../components/images/cat.png'
import Cowhen from '../components/images/cowhen.png'
import Deer from '../components/images/deer.png'
import AnimalCatch from '../components/images/animalcatch.png'
import AnimalHelp from '../components/images/anihelp.png'


const Data = () => {
  return (
    <div>
      <section className="data">
        <Data_sub img={Dog}/>
        <Data_sub img={Cat}/>
        <Data_sub img={Cowhen}/>
        <Data_sub img={Deer}/>
        <Data_sub img={AnimalCatch}/>
        <Data_sub img={AnimalHelp}/>
        {/* <div className="card">
            <img src={Dog} alt="dog logo"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div> */}
        {/* <div className="card">
            <img src="cat.png" alt="cat logo"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div>
        <div className="card">
            <img src="cowhen.png" alt="cow & hen"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div>
        <div className="card">
            <img src="deer.png" alt="deer"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div>
        <div className="card">
            <img src="animalcatch.png" alt="animal help"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div>

        <div className="card">
            <img src="anihelp.png" alt="animal help"/>
            <div>
                <p>69.9</p>
                <h4>million</h4>
                <div className="card-detail">Total Homeless Companion Animals</div>
            </div>
        </div> */}
    </section>
    </div>
  )
}

export default Data
