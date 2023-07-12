import React from 'react'
const Prop = props => (
  <a {...props} rel="noopener" target={props.target || '_blank'} />
)

export default Prop
