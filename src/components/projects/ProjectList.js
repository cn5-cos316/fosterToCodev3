import React from 'react'

const ProjectList = () => {
  return (
    <div className="project-list section">

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Growth Mindset Intervention</span>
          <p>Goal: Shift Fixed Mindset to Growth Mindset</p>
         
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Cognitive Intervention</span>
          <p>Goal: Shift external motivations to intrinsic motivation</p>
          
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Different Modalities of Learning</span>
          <p>Goal: Create awareness about different types of learning</p>
          
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Practice</span>
          <p>Sometimes you just need to practice</p>
          
        </div>
      </div>
      
    </div>
  )
}

export default ProjectList