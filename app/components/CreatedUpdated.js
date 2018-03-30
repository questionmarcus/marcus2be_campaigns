import React from 'react';

/*
 * Simple component to add a small footer to the bottomof each card, displaying
 * information on the time of creation and update of the campaign data.
 */
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
