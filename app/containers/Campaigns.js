import React from 'react'
import ReactPaginate from 'react-paginate'
import SingleCampaign from './SingleCampaign'
const campaignData = require('../../campaigns.json')

function CampaignList(props) {
  return (
    props.campaignData.slice(props.offset, (props.offset+props.perPage)).map(function(campaign) {
      return (
        <div key={campaign.id}>
          <SingleCampaign data={campaign} updateGoal={props.updateGoal}/>
        </div>
      )
    })
  )
}

class Campaigns extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignData: campaignData,
      offset: 0,
      maxPages: Math.ceil(campaignData.length / this.props.perPage)
    };
    this.handlePageClick = this.handlePageClick.bind(this)
    this.updateGoal = this.updateGoal.bind(this)
  };

  updateGoal( goal, id ) {
    let updatedCampaignData = this.state.campaignData.map(( campaign ) => {
      if (campaign.id === id) {
        campaign.goal = goal
      }
      return campaign
    })

    this.setState({
        campaignData: updatedCampaignData
      })
  }

  handlePageClick(data) {
    let pageNo = data.selected
    let numPerPage = this.props.perPage
    this.setState({offset: pageNo*numPerPage})
  }

  render () {
    return (
      <div>
      <CampaignList offset={this.state.offset}
        perPage={this.props.perPage}
        campaignData={this.state.campaignData}
        updateGoal={this.updateGoal} />
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<a href="">...</a>}
                     breakClassName={"break-me"}
                     pageCount={this.state.maxPages}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />
      </div>
    )
  }
}

module.exports = Campaigns
