import React from 'react'
import ReactPaginate from 'react-paginate'
import SingleCampaign from './SingleCampaign'
const campaignData = require('../../campaigns.json')

/*
 * Function to create the correct number of elements to be displayed on the page
 * and create new Campaign card components for each.
 *
 * T0-Do: Add filtering methods here to only display certain cards
 */
function CampaignList(props) {
  return (
    props.campaignData.slice(
      props.offset, (props.offset+props.perPage)
    ).map(function(campaign) {
      return (
          <SingleCampaign data={campaign}
            updateGoal={props.updateGoal}
            key={campaign.id} />
      )
    })
  )
}

/*
 * I guess you could call this the main container... handles state change and
 * deals with the pagination problem (by outsourcing it to the paginate component)
 * it loads creates the list of campaign cards to be displayed on the page
 */
class Campaigns extends React.Component {
  /*
   * Load in campaign data (should probably use a different name...) and define
   * starting location of cards (indexes start at 0, am I right), and the number
   * of pages that will exist. Also bind the functions so that they work in the
   * context of this container, as this is where state change should happen.
   */
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

  /*
   * function to be passed down to elements that are updating the goal for a
   * campaign. Will take the id of the element (which is the same as the data's ID)
   * and update the state of that campaign such that the goal is set, and the
   * "last updated" value is set to the time of change.
   */
  updateGoal( goal, id ) {
    let updatedTime = new Date(Date.now()).toISOString()

    let updatedCampaignData = this.state.campaignData.map(( campaign ) => {
      if (campaign.id === id) {
        campaign.goal = goal
        campaign.updated_at = updatedTime
      }
      return campaign
    })

    this.setState({
        campaignData: updatedCampaignData
      })
  }

  /*
   * function to deal with the changing of pages, updating the page campaign offset
   * based on the page the user is moving to.
   */
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

export default Campaigns
