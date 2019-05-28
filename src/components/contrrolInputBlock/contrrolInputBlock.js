import React from 'react';
import PropTypes from 'prop-types';
import './contrrolInputBlock.css';

class ContrrolInputBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
    };
    this.switchHandler = this.switchHandler.bind(this);
  }

  switchHandler() {
    this.setState(prevState => ({
      disable: !prevState.disable,
    }));
  }

  render() {
    const { disable } = this.state;
    const { componentChilds } = this.props;
    const { mainBtn, minorBtn } = componentChilds;
    const { childs } = minorBtn;
    return (
      <>
        <label htmlFor={mainBtn.id} className="ip-address__container">
          <input type="radio" name={mainBtn.inputName} id={mainBtn.id} defaultChecked onChange={this.switchHandler} />
          {mainBtn.label}
          <span className="checkmark" />
        </label>
        <label htmlFor={minorBtn.id} className="ip-address__container">
          <input type="radio" name={minorBtn.inputName} id={minorBtn.id} onChange={this.switchHandler} />
          {minorBtn.label}
          <span className="checkmark" />
        </label>
        <div className="ip-address__custom-container">
          {
            childs.map(child => (
              <label htmlFor={child.id} className="ip-address__text">
                <span className="text__label-container">
                  {child.label}
                  {child.required && <span className="required-symbol">*</span>}
                </span>
                <input type="text" className="ip-address__input" id={child.id} disabled={disable} />
              </label>
            ))
          }
        </div>
      </>
    );
  }
}

ContrrolInputBlock.propTypes = {
  componentChilds: PropTypes.instanceOf(Object).isRequired,
};

export default ContrrolInputBlock;
