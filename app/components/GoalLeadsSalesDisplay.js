import React from 'react'
import handshake from '../assets/handshake.svg'
import box from '../assets/box.svg'

/*
 * Component to display list of data on the: Goal type, sales converion data,
 * and the lead converions.
 * Goals:
 *    - If no goal assigned, display buttons using option and tooltips data
 *      from the constructor.
 *    - When button is pressed, update state of the application and display new Goal
 * Leads/Sales:
 *    - If no data, just display no data to user... user's shouldn't be able to update
 *      this data anyway.
 *    - Show tooltips for the conversions to give more information to users about
 *      what they mean.
 */
class GoalLeadsSalesDisplay extends React.Component {
  /*
   * Add the goal options and the tooltip information about the options to display
   * if no goals are set.
   */
  constructor(props) {
    super(props)
    this.state = {
      options: ["awareness", "consideration", "conversions"],
      tooltips: [
        "Objectives that generate interest in your product or service",
        "Objectives that get people to start thinking about your business and look for more information about it",
        "Objectives that encourage people interested in your business to purchase or use your product or service"
      ]
    }

  }

  render() {
    return (
      <div className="gls-display">
        <div>
          <h4>Goal</h4>
          {
            this.props.goal ?
              <p>{this.props.goal}</p>
            :
              <div>
                <p>
                  Whoops! Looks like you have not assigned a goal yet. You can pick one of the following goals:
                </p>
                <div className="goal-buttons">
                   {this.state.options.map(( option, index ) => {
                     return (
                      <button className="tooltip" key={index} onClick={() => this.props.updateGoal(option, this.props.id)}>
                        {option}
                        <span className="tooltiptext">{this.state.tooltips[index]}</span>
                      </button>
                    )
                  })}
                </div>
                <p>
                  <a href="https://www.facebook.com/business/help/517257078367892" target="_blank">
                    See here for more info
                  </a>
                </p>
              </div>
          }
        </div>
        <div><hr /></div>
        {
          this.props.lead_amount ?
            <div>
              <h4>Lead Conversions <img src={handshake} alt="handshake icon"/></h4>
              <p className="tooltip">
                {this.props.lead_amount} conversions
                <span className="tooltiptext">
                  These people make valuable friends! The more you have; the better
                </span>
              </p>
              <p>Conversion value &euro;{this.props.lead_value/100}</p>
            </div>
          :
            <div>
              <h4>Lead Conversions <img src={handshake} alt="handshake icon"/></h4>
              <p className="invaid-data">No data</p>
            </div>
        }
        <div><hr /></div>
        {
          this.props.sales_amount ?
            <div>
              <h4>Sales Conversions <img src={box} alt="package icon"/></h4>
              <p className="tooltip">
                {this.props.sales_amount} conversions
                <span className="tooltiptext">
                  These are the people you managed to get to buy the product... I guess
                  you could call them <em>new</em> customers.
                </span>
              </p>
              <p>Conversions value &euro;{this.props.sales_value/100}</p>
            </div>
          :
            <div>
              <h4>Sales Conversions <img src={box} alt="package icon"/></h4>
              <p className="invalid-data">No data</p>
            </div>
        }
      </div>
    )
  }
}

export default GoalLeadsSalesDisplay
