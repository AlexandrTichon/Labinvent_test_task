import React from 'react';
import PropTypes from 'prop-types';
import ControlInputBlock from '../contrrolInputBlock/contrrolInputBlock';

import './ethernetSettings.css';

const EthernetSettings = ({ title, setsId, disabled }) => (
  <div className="ethernet-sets">
    {title && (<h3 className="ethernet-sets__title">{title}</h3>)}
    <div className="ethernet-sets__ip-address">
      <ControlInputBlock
        setsId={setsId}
        blockDisabled={disabled}
        componentChilds={
        {
          mainBtn: {
            label: 'Obtain an IP address automatically (DHCP/BootP)',
            id: 'ip-address-auto',
            inputName: 'ip-address',
          },
          minorBtn: {
            label: 'Use the follow IP address',
            id: 'ip-address-custom',
            inputName: 'ip-address',
            childs: [
              {
                label: 'IP address',
                id: 'ip-address-name',
                required: true,
              },
              {
                label: 'Subnet Mask',
                id: 'subnet-mask',
                required: true,
              },
              {
                label: 'Default Gateway',
                id: 'default gateway',
                required: false,
              },
            ],
          },
        }
      }
      />
      <ControlInputBlock
        setsId={setsId}
        blockDisabled={disabled}
        componentChilds={
        {
          mainBtn: {
            label: 'Obtain DNS server address automatically',
            id: 'dns-server-auto',
            inputName: 'dns-server',
          },
          minorBtn: {
            label: 'Use the follow DNS server address',
            id: 'dns-server-custom',
            inputName: 'dns-server',
            childs: [
              {
                label: 'Preffered DNS server',
                id: 'preffered-dns-server-name',
                required: true,
              },
              {
                label: 'Alternative DNS server',
                id: 'subnet-mask',
                required: false,
              },
            ],
          },
        }
      }
      />
    </div>
  </div>
);

EthernetSettings.propTypes = {
  title: PropTypes.string,
  setsId: PropTypes.string,
  disabled: PropTypes.bool,
};

EthernetSettings.defaultProps = {
  title: '',
  setsId: '',
  disabled: false,
};

export default EthernetSettings;
