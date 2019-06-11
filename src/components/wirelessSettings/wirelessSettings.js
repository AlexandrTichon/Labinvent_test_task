import React from 'react';
import cn from 'classnames';
import EthernetSettings from '../ethernetSettings/ethernetSettings';
import SelectWireless from '../selectWireless/selectWireless';
import { getPropValue, getPropValueChekbox } from '../../api';
import './wirelessSettings.css';

class WirelessSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableWifi: true,
      disableSequrity: true,
      initialData: {},
    };
    this.switchWifi = this.switchWifi.bind(this);
    this.switchSequrity = this.switchSequrity.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
  }

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    const INITIAL_DATA = JSON.parse(localStorage.getItem('internetSets'));
    if (!INITIAL_DATA) {
      return;
    }
    this.setState({ initialData: INITIAL_DATA });
    if (getPropValueChekbox(INITIAL_DATA, 'wireless-sets__input')) {
      this.setState({ disableWifi: false });
      if (getPropValueChekbox(INITIAL_DATA, 'sequrity-checkbox__input')) {
        this.setState({ disableSequrity: false });
      }
    }
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
    const {
      disableWifi,
      disableSequrity,
      initialData,
    } = this.state;
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
            checked={!disableWifi}
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
            checked={!disableSequrity}
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
              defaultValue={getPropValue(initialData, 'key-container__input')}
              disabled={disableSequrity}
              required={!disableSequrity}
              maxLength="20"
              minLength="8"
            />
          </label>
        </div>
        <EthernetSettings setsId="wireless" disabled={disableWifi} />
      </div>
    );
  }
}

export default WirelessSettings;
