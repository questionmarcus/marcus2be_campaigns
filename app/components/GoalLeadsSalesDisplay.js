import React from 'react'
import handshake from '../assets/handshake.svg'
import box from '../assets/box.svg'

class GoalLeadsSalesDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: ["awareness", "consideration", "conversions"]
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
              <div className="goal-buttons">
                 {this.state.options.map(( option, index ) => {
                   return (
                     // <div>
                       // <label for={index}>{option}</label>
                       // <input type='radio' name='goals' value={option} key={index}
                       //  onChange={() => this.props.updateGoal(option, this.props.id)}/>
                       <button key={index} onClick={() => this.props.updateGoal(option, this.props.id)}>
                        {option}
                        </button>
                     // </div>
                  )
                })}
            </div>
          }
        </div>
        <div><hr /></div>
        {
          this.props.lead_amount ?
          <div>
            <h4>Lead Conversions <img src={handshake} alt=""/></h4>
            <p>{this.props.lead_amount} conversions</p>
            <p>Conversion value &euro;{this.props.lead_value/100}</p>
          </div>
          :
          <div>
            <h4>Lead Conversions <img src={handshake} alt=""/></h4>
            <p className="invaid-data">No data</p>
          </div>
        }
        <div><hr /></div>
        {
          this.props.sales_amount ?
            <div>
              <h4>Sales Conversions <img src={box} alt=""/></h4>
              <p>{this.props.sales_amount} conversions</p>
              <p>Conversions value &euro;{this.props.sales_value/100}</p>
            </div>
          :
            <div>
              <h4>Sales Conversions <img src={box} alt=""/></h4>
              <p className="invalid-data">No data</p>
            </div>
        }
      </div>
    )
  }
}

export default GoalLeadsSalesDisplay
