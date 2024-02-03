import React from 'react'
import What_we_do_blocks from './What_we_do_blocks'
import Save_image_1 from "../components/images/What_we_do_image.jpeg"
const What_we_do = () => {
  return (
    <>
      <div style={{ backgroundColor: 'green' }}>
      <div style={{height:"75px"}}></div>
        <div className="container row" >
          <What_we_do_blocks image={Save_image_1} />
          <What_we_do_blocks image={Save_image_1} />
          <What_we_do_blocks image={Save_image_1} />
          <What_we_do_blocks image={Save_image_1} />
          <What_we_do_blocks image={Save_image_1} />
          <What_we_do_blocks image={Save_image_1} />
        </div>
      </div>

    </>
  )
}
export default What_we_do
