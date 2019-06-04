import React from 'react';
import cn from 'classnames';
import EthernetSettings from '../ethernetSettings/ethernetSettings';
import SelectWireless from '../selectWireless/selectWireless';
import './wirelessSettings.css';

class WirelessSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableWifi: true,
      disableSequrity: true,
    };
    this.switchWifi = this.switchWifi.bind(this);
    this.switchSequrity = this.switchSequrity.bind(this);
  }

  switchWifi() {
    this.setState(prevState => ({
      disableWifi: !prevState.disableWifi,
    }));
  }

  switchSequrity() {
    this.setState(prevState => ({
      disableSequrity: !prevState.disableSequrity,
    }));
  }

  render() {
    const { disableWifi, disableSequrity } = this.state;
    return (
      <div className="wireless-sets">
        <h3 className="wireless-sets__title">Wireless Settings</h3>
        <label htmlFor="wireless-sets__input" className="wireless-sets__checkbox">
          <input
            name="wireless-sets-name"
            className="wireless-sets__input"
            id="wireless-sets__input"
            type="checkbox"
            onChange={this.switchWifi}
          />
          Enable wifi:
          <span className="checkmark__checkbox" />
        </label>
        <div className={cn('wireless-sets__network-name', { disabled: disableWifi })}>
            Wireless Network Name:
          <span className="required-symbol">
            {' * '}
          </span>
          <SelectWireless disableBlock={disableWifi} />
        </div>
        <label
          htmlFor="sequrity-checkbox__input"
          className={cn('wireless-sets__checkbox', { disabled: disableWifi })}
        >
          <input
            name="wireless-sets-sequrity"
            className="wireless-sets__input"
            id="sequrity-checkbox__input"
            type="checkbox"
            onChange={this.switchSequrity}
          />
          Enable Wireless Sequrity
          <span className="checkmark__checkbox" />
        </label>
        <div className={cn('wireless-sets__sequrity-key', { disabled: disableWifi || disableSequrity })}>
          <label
            htmlFor="key-container__input"
            className="sequrity-key__key-container"
          >
            Sequrity key:
            <span className="required-symbol">
              {' * '}
            </span>
            <input
              className="key-container__input"
              id="key-container__input"
              type="text"
              disabled={disableSequrity}
              required={!disableSequrity}
            />
          </label>
        </div>
        <EthernetSettings setsId="wireless" disabled={disableWifi} />
      </div>
    );
  }
}

export default WirelessSettings;
