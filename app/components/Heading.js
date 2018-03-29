import React from 'react'

function CampaignName(props) {
  return (
    <h1 className="campaign-title">
      {props.title}
    </h1>
  )
}

function StartEndDate(dates) {
  if (dates.start || dates.end) {
    return (
          <div className="date-display">
            <div><p>{dates.start}&ndash;{dates.end}</p></div>
            <div><p>&#40;{dates.nDays} {dates.nDays === 1 ? "day" : "days"} &#41;</p></div>
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
