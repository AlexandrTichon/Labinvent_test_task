import React from 'react';
import './wirelessSettings.css';

class WirelessSettings extends React.Component {
  constructor(props) {
    super();
    this.state = {
      disable: props.disable,
    };
  }

  render() {
    return (
      <label htmlFor="ip-address-custom">
        <input type="radio" name="ip-address" id="ip-address-custom" />
        WirelessSettings
      </label>
    );
  }
}

export default WirelessSettings;
