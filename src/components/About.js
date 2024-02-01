import React from 'react'
import Volunteer_data from './Volunteer_data';
import Modi from '../components/images/modi.jpeg'
import What_we_do_blocks from './What_we_do_blocks';
const About = () => {
  return (
    <div>
      <div style={{height:"75px"}}>
      </div>
      <h1>about us page hai ye </h1>
      <What_we_do_blocks/>
      <What_we_do_blocks/>
      
      <Volunteer_data image={Modi}/>
    </div>
  )
}
export default About;
