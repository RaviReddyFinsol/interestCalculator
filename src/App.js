import React from 'react'
import { NavLink } from 'react-router-dom';
import Router from './routes/Router'

const navLinkStyle = {
  padding: '10px', color: 'white', border: '2px', backgroundColor: 'blue', margin: '5px', textDecoration: 'none', height: '35px', textAlign: 'center'
}
const activeNavLinkStyle = {
  padding: '10px', color: 'white', border: '2px', margin: '5px', textDecoration: 'none', height: '35px', textAlign: 'center'
}

function App() {
  return (
    <div style={{ margin: '0', padding: '0', width: '100%', height: '100%', }}>
      <NavLink to='/' style={navLinkStyle} activeStyle={activeNavLinkStyle}>Interest Calculator</NavLink>
      <NavLink to='/ratio' style={navLinkStyle} activeStyle={activeNavLinkStyle}>Ratio</NavLink>
      <div style={{ marginTop: '20px' }}>
        <Router />
      </div>
    </div>
  );
}

export default App;
