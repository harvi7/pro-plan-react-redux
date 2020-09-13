import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Some Random text. Some Random text. Some Random text. Some Random text. v Some Random text. Some Random text. Some Random text.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by NewTestUser</div>
                    <div>13th September, 1pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
