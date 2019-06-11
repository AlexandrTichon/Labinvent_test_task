import React from 'react';
import './App.css';

import WirelessSettings from '../wirelessSettings/wirelessSettings';
import EthernetSettings from '../ethernetSettings/ethernetSettings';
import ControlBtns from '../controlBtns/controlBtns';

import { submit } from '../../api';

const App = () => (
  <form className="form" onSubmit={submit}>
    <div className="form__container">
      <div className="settings-block">
        <EthernetSettings title="Ethernet Settings" setsId="ethernet" />
      </div>
      <div className="settings-block">
        <WirelessSettings />
      </div>
    </div>
    <ControlBtns />
  </form>
);

export default App;
