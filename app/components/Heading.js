import React from 'react'

/*
 * Basic component that just creates a h1 tag with the campaign title
 * but you never know... maybe you could make it more exciting.
 * To-Do: Think about the what to do if there isn't even a title...
 */
function CampaignName(props) {
  return (
    <h1 className="campaign-title">
      {props.title}
    </h1>
  )
}

/*
 * Function to handle start/end date display. Will take in time string and transform
 * it to a Date object, this way there is more control over the way it is displayed.
 * for this component, it is only using the default toDateString() function to print
 * a far more readable date.
 */
function StartEndDate(dates) {
  if (dates.start || dates.end) {
    return (
          <div className="date-display">
            <div><p>{new Date(dates.start).toDateString()} &ndash; {new Date(dates.end).toDateString()}</p></div>
            <div><p>&#40;{dates.nDays} {dates.nDays === 1 ? "day" : "days"}&#41;</p></div>
          </div>
        )
} else {
  return (
        <div className="invalid-data">
          <p>Date not set</p>
        </div>
      )
    }
}

/*
 * (container) component that displays the heading of the campaign cards width
 * the campaign name and start / end dates
 */
class Heading extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="campaign-heading">
        <CampaignName title={this.props.title} />
        <StartEndDate
          start={this.props.start_date}
          end={this.props.end_date}
          nDays={this.props.days} />
      </div>
    )
  }
}

export default Heading
