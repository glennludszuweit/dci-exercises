import React from 'react'
import './Hamster.css'

const image = 'https://imgix.bustle.com/rehost/2016/9/13/c2a4f88d-9951-450e-9d09-72cb0d27d24c.png?w=800&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces'

function Hamster() {
  return <img className="hamster" src={image} alt=""/>
}

export default Hamster;