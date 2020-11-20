import React from "react"
import PropTypes from "prop-types"

import Restrict from '../restrict/index'

const InspectJWT = ({ children }) => {

  const x = false

  return (
    <>
      { x ? children : <Restrict />}
    </>
  )
}

InspectJWT.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InspectJWT
