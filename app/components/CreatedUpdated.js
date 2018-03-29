import React from 'react';

function CreatedUpdated(timeStamps) {
  return (
    <div className="card-footer">
      <div>
        <span>
          {
            timeStamps.createdAt ?
              "Created: "+timeStamps.createdAt
            :
              ""
          }
        </span>
      </div>
      <div>
        <span>
          {
            timeStamps.updatedAt ?
              "Last Updated: "+timeStamps.updatedAt
            :
              ""
          }
        </span>
      </div>
    </div>
  )
}

export default CreatedUpdated
