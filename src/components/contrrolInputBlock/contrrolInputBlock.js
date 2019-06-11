import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uniqid from 'uniqid';
import './contrrolInputBlock.css';
import { getPropValue, getPropValueChekbox } from '../../api';

class ContrrolInputBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
      initialData: {},
    };
    this.switcher = this.switcher.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
  }

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    const INITIAL_DATA = JSON.parse(localStorage.getItem('internetSets'));

    const { componentChilds, setsId } = this.props;
    const { mainBtn, minorBtn } = componentChilds;
    const inputName = `${setsId}-${mainBtn.inputName}`;
    const inputMinorId = `${minorBtn.id}-${inputName}`;
    if (INITIAL_DATA
      && getPropValueChekbox(INITIAL_DATA, inputMinorId)) {
      this.setState({ disable: false, initialData: INITIAL_DATA });
    } else this.setState({ initialData: INITIAL_DATA });
  }

  switcher() {
    this.setState(prevState => ({
      disable: !prevState.disable,
    }));
  }


  render() {
    const { disable, initialData } = this.state;
    const { componentChilds, setsId } = this.props;
    const { mainBtn, minorBtn } = componentChilds;
    const { childs } = minorBtn;
    const inputName = `${setsId}-${mainBtn.inputName}`;
    const inputMainId = `${mainBtn.id}-${inputName}`;
    const inputMinorId = `${minorBtn.id}-${inputName}`;

    const { blockDisabled } = this.props;
    return (
      <>
        <label htmlFor={inputMainId} className={cn('ip-address__container', { disabled: blockDisabled })}>
          <input
            type="radio"
            name={inputName}
            id={inputMainId}
            defaultChecked
            onChange={this.switcher}
          />
          {mainBtn.label}
          <span className="checkmark" />
        </label>
        <label htmlFor={inputMinorId} className={cn('ip-address__container', { disabled: blockDisabled })}>
          <input
            type="radio"
            name={inputName}
            id={inputMinorId}
            checked={!disable}
            onChange={this.switcher}
          />
          {minorBtn.label}
          <span className="checkmark" />
        </label>
        <div className="ip-address__custom-container">
          {
            childs.map((child) => {
              const elementId = `${setsId}-${child.id}`;
              const elementValue = getPropValue(initialData, elementId);
              return (
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
                  <input
                    defaultValue={elementValue}
                    type="text"
                    className="ip-address__input"
                    id={`${elementId}`}
                    disabled={disable}
                    required={child.required && !disable}
                    pattern="\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b"
                  />
                </label>
              );
            })
          }
        </div>
      </>
    );
  }
}

ContrrolInputBlock.propTypes = {
  componentChilds: PropTypes.instanceOf(Object).isRequired,
  setsId: PropTypes.string.isRequired,
  blockDisabled: PropTypes.bool,
};

ContrrolInputBlock.defaultProps = {
  blockDisabled: false,
};

export default ContrrolInputBlock;
