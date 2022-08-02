import React from 'react';
import { ReactNotifications } from 'react-notifications-component';
import Homepage from './Homepage.js';

function App() {
  return (
    <div>
      <ReactNotifications />
        <Homepage/>
    </div>
  );
}

export default App;
