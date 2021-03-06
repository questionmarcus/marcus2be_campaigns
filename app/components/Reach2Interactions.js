import React from 'react'

/*
 * Component to display the KPI funnel of Reach to interactions using a dynamically
 * generated graphic using overlapping circles to display the percentage of the KPIs
 * if no data is present, a graphic with a "?" in the middle will be displayed
 */
function Reach2Interactions(KPIs) {
  // Figure constants... only need to be changed is the magnitude of KPI changes
  const figWidth = 350
  const figHeight = 200
  const mainRad = figHeight/2
  // Set the radius of the circles by calculating the value that will create and circle with x% area
  const viewsWidth = Math.sqrt(KPIs.views/KPIs.reach*(mainRad*mainRad));
  const interactionsWidth = Math.sqrt(KPIs.interactions/KPIs.reach*(mainRad*mainRad))
  // Set the height of the arrows for the KPIs
  const reachArrowHeight = (mainRad-viewsWidth)/2
  const viewsArrowHeight = (mainRad-(viewsWidth+interactionsWidth)/2)
  // define valid data test (if any KPIs are null)
  let validData = KPIs.reach || KPIs.views || KPIs.interactions ? true : false
  return (
    <div className="kpi-container">
      {validData ?
        <svg
          width={figWidth} height={figHeight}
          viewBox="0 0 375 200" preserveAspectRatio="xMidYMid meet"
          className="kpi-graphic">
        <g>
          <circle cx={figHeight/2} cy={figHeight/2} r={mainRad} className="reach-graphic"/>
          <circle cx={figHeight/2} cy={figHeight/2} r={viewsWidth} className="views-graphic"/>
          <circle cx={figHeight/2} cy={figHeight/2} r={interactionsWidth} className="interaction-graphic" />
        </g>
        <g>
          <path d={"M "+mainRad+" "+reachArrowHeight+" "+(2*mainRad+10)+" "+reachArrowHeight} className="area-line"/>
          <path d={"M "+mainRad+" "+viewsArrowHeight+" "+(2*mainRad+10)+" "+viewsArrowHeight} className="area-line"/>
          <path d={"M "+mainRad+" "+mainRad+" "+(2*mainRad+10)+" "+mainRad} className="area-line"/>
        </g>
        <g>
          <circle cx={mainRad} cy={reachArrowHeight} r={2} />
          <circle cx={mainRad} cy={viewsArrowHeight} r={2} />
          <circle cx={mainRad} cy={mainRad} r={2} />
        </g>
        <g className="graphic-labels">
          <text x={2*mainRad+12} y={reachArrowHeight}>Reach: {KPIs.reach}</text>
          <text x={2*mainRad+12} y={viewsArrowHeight}>Views: {KPIs.views}</text>
          <text x={2*mainRad+12} y={mainRad}>Interactions: {KPIs.interactions}</text>
        </g>
        </svg>
      :
      <svg
        width={figWidth} height={figHeight}
        viewBox="0 0 350 200" preserveAspectRatio="xMidYMid meet"
        className="kpi-no-data">
        <circle cx={figWidth/2} cy={figHeight/2} r={mainRad} className="no-data-circle"/>
        <text x={figWidth/2} y={figHeight/2}>?</text>
      </svg>
    }
    </div>
  )
}

export default Reach2Interactions
