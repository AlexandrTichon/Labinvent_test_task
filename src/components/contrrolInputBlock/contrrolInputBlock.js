import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uniqid from 'uniqid';
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
    const { componentChilds, setsId } = this.props;
    const { mainBtn, minorBtn } = componentChilds;
    const { childs } = minorBtn;
    const inputName = `${setsId}-${mainBtn.inputName}`;
    const inputMinorId = `${minorBtn.id}-${inputName}`;
    const inputMainId = `${mainBtn.id}-${inputName}`;

    const { blockDisabled } = this.props;
    return (
      <>
        <label htmlFor={inputMainId} className={cn('ip-address__container', { disabled: blockDisabled })}>
          <input
            type="radio"
            name={inputName}
            id={inputMainId}
            defaultChecked
            onChange={this.switchHandler}
            disabled={blockDisabled}
          />
          {mainBtn.label}
          <span className="checkmark" />
        </label>
        <label htmlFor={inputMinorId} className={cn('ip-address__container', { disabled: blockDisabled })}>
          <input
            type="radio"
            name={inputName}
            id={inputMinorId}
            onChange={this.switchHandler}
            disabled={blockDisabled}
          />
          {minorBtn.label}
          <span className="checkmark" />
        </label>
        <div className="ip-address__custom-container">
          {
            childs.map(child => (
              <label htmlFor={child.id} className="ip-address__text" key={uniqid()}>
                <span className={cn('text__label-container', { disabled: disable })}>
                  {child.label}
                  {child.required && (
                    <span className={cn('required-symbol',
                      { disabled: disable })}
                    >
                      {' * '}
                    </span>
                  )}
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
  setsId: PropTypes.string.isRequired,
  blockDisabled: PropTypes.string,
};

ContrrolInputBlock.defaultProps = {
  blockDisabled: false,
};

export default ContrrolInputBlock;
