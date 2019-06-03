import React from 'react';
import './App.css';

import WirelessSettings from '../wirelessSettings/wirelessSettings';
import EthernetSettings from '../ethernetSettings/ethernetSettings';

const App = () => (
  <form className="form">
    <div className="form__container">
      <div className="settings-block">
        <EthernetSettings title="Ethernet Settings" setsId="ethernet" />
      </div>
      <div className="settings-block">
        <WirelessSettings />
      </div>
    </div>

  </form>
);

export default App;
