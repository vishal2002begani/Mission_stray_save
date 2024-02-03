import React from 'react'
import Volunteer_data from './Volunteer_data';
import Modi from '../components/images/modi.jpeg'
import What_we_do_blocks from './What_we_do_blocks';
const About = () => {
  return (
    <div className=""style={{ backgroundColor: 'green' }} >
      {/* <div style={{ height: "75px" }}></div> */}
      <div className="row">
        <What_we_do_blocks image={Modi}/>
        <What_we_do_blocks image={Modi}/>
      </div>
      <div className="row">
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
        <Volunteer_data image={Modi} />
      </div>
    </div>
  )
}
export default About;
