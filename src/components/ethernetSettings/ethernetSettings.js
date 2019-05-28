import React from 'react';
import ControlInputBlock from '../contrrolInputBlock/contrrolInputBlock';

import './ethernetSettings.css';

const EthernetSettings = () => (
  <div className="ethernet-sets">
    <h3 className="ethernet-sets__title">Ethernet Settings</h3>
    <div className="ethernet-sets__ip-address">
      <ControlInputBlock componentChilds={
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
    </div>
  </div>
);

export default EthernetSettings;
