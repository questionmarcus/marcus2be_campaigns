var React = require('react')
var ReactPaginate = require('react-paginate')
var SingleCampaign = require('./SingleCampaign')
const campaignData = require('../../campaigns.json')

function CampaignList(props) {
  return (
    campaignData.slice(props.offset, (props.offset+props.perPage)).map(function(campaign) {
      return (
        <div className="campaign-element" key={campaign.id}>
          <SingleCampaign data={campaign} />
        </div>
      )
    })
  )
}

class Campaigns extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      maxPages: Math.ceil(campaignData.length / this.props.perPage)
    };
    this.handlePageClick = this.handlePageClick.bind(this)
    console.log(this.state.maxPages)
  };

  handlePageClick(data) {
    let pageNo = data.selected
    console.log(data.selected)
    let numPerPage = this.props.perPage
    this.setState({offset: pageNo*numPerPage})
  }

  render () {
    return (
      <div>
      <CampaignList offset={this.state.offset} perPage={this.props.perPage} />
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
