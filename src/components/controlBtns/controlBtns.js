import React from 'react';
import './controlBtns.css';

class ControlBtns extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="form__container__control-btns">
        <input
          type="submit"
          value="Save"
          className="control-btns__save-btn"
        />
        <button
          type="button"
          className="control-btns__cansel-btn"
        >
          Cansel
        </button>
      </div>
    );
  }
}

export default ControlBtns;
