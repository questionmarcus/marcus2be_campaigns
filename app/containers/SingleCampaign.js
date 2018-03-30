import React from 'react'
import Heading from '../components/Heading'
import GoalLeadsSalesDisplay from '../components/GoalLeadsSalesDisplay'
import Reach2Interactions from '../components/Reach2Interactions'
import CreatedUpdated from '../components/CreatedUpdated'

/*
 * Container component for each campaign card element on the page.
 */
class SingleCampaign extends React.Component {
  render () {
    return (
      <div className="campaign-card" key={this.props.key}>
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
      <CreatedUpdated createdAt={this.props.data.created_at}
          updatedAt={this.props.data.updated_at} />
      </div>
    )
  }
}

module.exports = SingleCampaign
