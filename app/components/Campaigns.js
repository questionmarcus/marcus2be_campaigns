var React = require('react')
var ReactPaginate = require('react-paginate')
var SingleCampaign = require('./SingleCampaign')
const campaignData = require('../../campaigns.json')

function CampaignList(props) {
  console.log('props ', props)
  return (
    props.campaignData.slice(props.offset, (props.offset+props.perPage)).map(function(campaign) {
      console.log('undef ', campaign)
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
        console.log("please work")
        campaign.goal = goal
        console.log('campaign', campaign)
      }
      return campaign
    })

    console.log("it worked... kinda");
    this.setState({
        campaignData: updatedCampaignData
      })

    console.log('data ', this.state.campaignData)
    console.log('updated ', updatedCampaignData)
    console.log("set state worked too")
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
