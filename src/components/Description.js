import React from 'react'
import './Description.css'

const Description = props => (
    <div className="ProjectHero">
      <h1>{props.project}</h1>
      <p className="ProjectDescription">{props.description}</p>
      <img src={props.image} />
      <p className="ProjectRole"><span className="ProjectRoleTitle">My Role</span><br /><span className="ProjectRoleMyRole">{props.myrole}</span></p>
    </div>
)

export default Description