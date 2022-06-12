import React,{memo,useEffect} from 'react'
import PropTypes from 'prop-types'

function HeaderBlock({headerText}) {
  useEffect(()=>{
    console.log("Header block rendered..")
  })

  return (
    <>
       <div className='headerBlock'>{headerText}</div>
    </>
  )
}
export default memo(HeaderBlock)
  


