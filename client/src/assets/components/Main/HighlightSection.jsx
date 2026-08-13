
import  { Component } from 'react'

export default class HighlightSection extends Component {
  render() {
    return (
      <>
         <div className={this.props.titleClass}>
         {this.props.title}
       </div>

      <div className="description-wrapper">
        {this.props.description}
       </div>

      <div className="price-wrapper">
        {this.props.price}
     </div>

      <div className="links-wrapper">
          <ul>
           <li><a href="">{this.props.link1}</a></li>
            <li><a href="">{this.props.link2}</a></li>
          </ul>
        </div>
      </>
    )
  }
}
