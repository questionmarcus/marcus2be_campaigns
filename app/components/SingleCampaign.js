var React = require('react')
import Heading from './Heading'
import GoalLeadsSalesDisplay from './GoalLeadsSalesDisplay'
import Reach2Interactions from './Reach2Interactions'

// Dominic says these should be there own components
// function Heading(props) {
//   return (
//     <div className="campaign-heading">
//       <CampaignName title={props.title} />
//       <StartEndDate
//         start={props.start_date}
//         end={props.end_date}
//         nDays={props.days} />
//     </div>
//   )
// }

// function CampaignName(props) {
//   return (
//     <h1 className="campaign-title">
//       {props.title}
//     </h1>
//   )
// }
//
// function StartEndDate(dates) {
//   return (
//     <div className="date-display">
//       <div><p>{dates.start}&ndash;{dates.end}</p></div>
//       <div><p>&#40;{dates.nDays} days&#41;</p></div>
//     </div>
//   )
// }

// function Reach2Interactions(KPIs) {
//   const figWidth = 350
//   const figHeight = 200
//   const mainRad = figHeight/2
//   const viewsWidth = Math.sqrt(KPIs.views/KPIs.reach*(mainRad*mainRad));
//   const interactionsWidth = Math.sqrt(KPIs.interactions/KPIs.reach*(mainRad*mainRad))
//   const reachArrowHeight = (mainRad-viewsWidth)/2
//   const viewsArrowHeight = (mainRad-(viewsWidth+interactionsWidth)/2)
//   return (
//     <div className="kpi-container">
//       <svg
//       width={figWidth} height={figHeight}
//       viewBox="0 0 375 200" preserveAspectRatio="xMidYMid meet"
//       className="kpi-graphic">
//       <g>
//         <circle cx={figHeight/2} cy={figHeight/2} r={mainRad} className="reach-graphic"/>
//         <circle cx={figHeight/2} cy={figHeight/2} r={viewsWidth} className="views-graphic"/>
//         <circle cx={figHeight/2} cy={figHeight/2} r={interactionsWidth} className="interaction-graphic" />
//       </g>
//       <g>
//         <path d={"M "+mainRad+" "+reachArrowHeight+" "+(2*mainRad+10)+" "+reachArrowHeight} className="area-line"/>
//         <path d={"M "+mainRad+" "+viewsArrowHeight+" "+(2*mainRad+10)+" "+viewsArrowHeight} className="area-line"/>
//         <path d={"M "+mainRad+" "+mainRad+" "+(2*mainRad+10)+" "+mainRad} className="area-line"/>
//       </g>
//       <g>
//         <circle cx={mainRad} cy={reachArrowHeight} r={2} />
//         <circle cx={mainRad} cy={viewsArrowHeight} r={2} />
//         <circle cx={mainRad} cy={mainRad} r={2} />
//       </g>
//       <g className="graphic-labels">
//         <text x={2*mainRad+12} y={reachArrowHeight}>Reach: {KPIs.reach}</text>
//         <text x={2*mainRad+12} y={viewsArrowHeight}>Views: {KPIs.views}</text>
//         <text x={2*mainRad+12} y={mainRad}>Interaction: {KPIs.interactions}</text>
//       </g>
//       </svg>
//     </div>
//   )
// }

// function GoalLeadsSalesDisplay(props) {
//   return (
//     <div className="gls-display">
//       <div>
//         <h4>Goal</h4>
//         {props.goal ?
//           <p>{props.goal}</p>
//          :
//           <p>No data provided</p>}
//
//       </div>
//       <div>
//         <h4>Lead Conversions</h4>
//         <p>{props.lead_amount} conversions</p>
//         <p>Conversion value &euro;{props.lead_value/100}</p>
//       </div>
//       <div>
//         <h4>Sales Conversions</h4>
//         <p>{props.sales_amount} conversions</p>
//         <p>Conversions value &euro;{props.sales_value/100}</p>
//       </div>
//     </div>
//   )
// }

class SingleCampaign extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'hello'
    }
  }

  render () {

    // const {title, start_date, end_date, days} = props.data;

    return (
      <div className="campaign-card">
        <Heading
          title={this.props.data.title}
          start_date={this.props.data.start_date}
          end_date={this.props.data.end_date}
          days={this.props.data.days} />
      <div className="data-display">
        <Reach2Interactions
            reach={this.props.data.reach}
            views={this.props.data.views}
            interactions={this.props.data.interactions} />
        <GoalLeadsSalesDisplay
            goal={this.props.data.goal}
            id={this.props.data.id}
            lead_amount={this.props.data.lead_conversion_amount}
            lead_value={this.props.data.lead_conversion_value_cents}
            sales_amount={this.props.data.sales_conversion_amount}
            sales_value={this.props.data.sales_conversion_value_cents}
            updateGoal={this.props.updateGoal}/>
      </div>
      </div>
      // "capture_rate:"
      // "created_at":
      // "days":
      // "end_date":
      // "goal":
      // "id":
      // "interaction_rate":
      // "lead_conversion_amount":
      // "lead_conversion_value_cents":
      // "sales_conversion_amount":
      // "sales_conversion_value_cents":
      // "start_date":
      // "title":
      // "updated_at":
      // "interactions":
      // "reach":
      // "views":
  )
  }
}

module.exports = SingleCampaign
