import React from 'react'
import './Projects.css'

const Project = props => (
    <div className="Project">
        <img src={props.image} />
        <h3>{props.title}</h3>
    </div>
)

export default Project