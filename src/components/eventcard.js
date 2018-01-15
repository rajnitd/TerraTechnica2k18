import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/eventscard.css';
import Background from '../static/images3.jpg';
import { Link} from 'react-router'

// custom modules import
var sectionStyle={
  backgroundImage:`url(${Background}`
}


class EventsCard extends Component {
  render() {
    return (
        <div className="EventsCard comEC" style={sectionStyle}>
          <div className="layer1 comEC" id="layer1">
              <div className="icon-wrap comEC" >
                <div className="comEC">
                  <div className="comEC animDiv">
                    {/*<img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="Cardicon"/>*/}
                  </div>
                </div>
              </div>
              <div className="title-wrap comEC">
                  {this.props.title}
              </div>
          </div>
          <div className="layer1 comEC" id="layer2">
                  <div class="layer1-tit comEC">{this.props.title}</div>
                  <Divider inset={true} style={{"backgroundColor":"black",}}/>
                  <div className="layer1-options-wrap">
                    {/*<button data-hover="click me!"><div>Hover me!</div></button>*/}
                    <div class="layer1-icon-cont comEC">
                        <div class="layer1-ic-wrap">
                            <img src="https://image.flaticon.com/icons/svg/237/237416.svg" className="Cardicon"/>
                        </div>
                        <div class="layer1-content-back"></div>
                        <div class="layer1-content-wrap comEC">
                            <div>Programming League</div>
                        </div>
                    </div>
                  </div>
          </div>
        </div>
    );

  }
}

export default EventsCard;
