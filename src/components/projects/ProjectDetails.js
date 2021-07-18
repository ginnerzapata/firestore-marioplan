import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            aperiam officiis facilis atque a veniam et sed? Voluptatum libero
            neque quasi tenetur id, saepe vel excepturi consectetur voluptate
            exercitationem sint!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ginner Zapata</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
