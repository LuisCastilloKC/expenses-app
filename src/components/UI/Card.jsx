import React from 'react'
import './Card.css'

const Card = (props) => {
                      // This White space after card in classes is important for display Card style as Children
    const classes = 'card ' + props.className

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card
