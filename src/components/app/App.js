import React from 'react';
import './App.css';

import WirelessSettings from '../wirelessSettings/wirelessSettings';
import EthernetSettings from '../ethernetSettings/ethernetSettings';

const App = () => (
  <div className="form__container">
    <div className="settings-block">
      <EthernetSettings />
    </div>
    <div className="settings-block">
      <WirelessSettings />
    </div>
  </div>
);

export default App;
