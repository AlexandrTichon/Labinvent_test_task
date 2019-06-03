import React from 'react';
import unqid from 'uniqid';
import refreshIcon from '../../assets/img/refresh_icon.svg';
import './selectWireless.css';

class SelectWireless extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fetchStatus: 'loading',
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ fetchStatus: 'loading' });
    setTimeout(() => fetch('/mock.json')
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
    const { data, fetchStatus } = this.state;
    // eslint-disable-next-line default-case
    switch (fetchStatus) {
      case 'loading':
        return (
          <>
            <select
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
          className="input-container__select"
          id="wireless-network-name"
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

export default SelectWireless;
