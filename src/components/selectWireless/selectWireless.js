import React from 'react';
import unqid from 'uniqid';
import PropTypes from 'prop-types';
import refreshIcon from '../../assets/img/refresh_icon.svg';
import { getPropValue } from '../../api';
import './selectWireless.css';

class SelectWireless extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fetchStatus: 'loading',
      value: '',
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setInitialData = this.setInitialData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.setInitialData();
  }

  setInitialData() {
    const initialData = JSON.parse(localStorage.getItem('internetSets'));
    const defaultValue = getPropValue(initialData, 'wireless-network-name');
    this.setState({ value: defaultValue });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  fetchData() {
    this.setState({ fetchStatus: 'loading' });
    setTimeout(() => fetch('./mock.json')
      .then(response => response.json())
      .then((result) => {
        const displayData = [];
        result.forEach((item) => {
          displayData.push(<option key={unqid()} value={item.name}>{item.name}</option>);
        });

        displayData.sort((item1, item2) => item2.strength - item1.strength); // strength sort
        displayData.sort((item1, item2) => (item2.favorite - item1.favorite)); // favorite sort

        this.setState({ data: displayData, fetchStatus: 'success' });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ fetchStatus: 'error' });
      }), 2000);
  }

  render() {
    const { disableBlock } = this.props;
    const { data, fetchStatus, value } = this.state;
    // eslint-disable-next-line default-case
    switch (fetchStatus) {
      case 'loading':
        return (
          <>
            <select
              disabled={disableBlock}
              className="input-container__select"
              id="wireless-network-name"
            />
            <button type="button" className="network-name__refresk-btn">
              <img
                src={refreshIcon}
                alt="refresh icon"
                className="refresh-icon loading"
              />
            </button>
          </>
        );
      case 'error':
        return (
          <>
            <select
              disabled
              className="input-container__select"
              id="wireless-network-name"
            />
            <button type="button" className="network-name__refresk-btn">
              <img
                src={refreshIcon}
                alt="refresh icon"
                className="refresh-icon error"
              />
            </button>
            <span className="error__message">Failed to load resourse</span>
          </>
        );
    }
    return (
      <>
        <select
          disabled={disableBlock}
          required={!disableBlock}
          className="input-container__select"
          id="wireless-network-name"
          value={value}
          onChange={this.handleChange}
        >
          {data}
        </select>
        <button type="button" className="network-name__refresk-btn" onClick={this.fetchData}>
          <img
            src={refreshIcon}
            alt="refresh icon"
            className="refresh-icon"
          />
        </button>
      </>
    );
  }
}

SelectWireless.propTypes = {
  disableBlock: PropTypes.bool.isRequired,
};

export default SelectWireless;
