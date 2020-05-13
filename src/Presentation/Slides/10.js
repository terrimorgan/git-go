import React from 'react';

import Participant from '../Participant'

const participants = [
  'Wilfredo Velázquez-Rodríguez',
  'Jennifer Pollack',
  'Chelsea Irish',
  'Maria Demesa'
];

export default
<div className="each-fade">
  <h2>Sign-in Sheet</h2>
  <p>
    Add your name to the list to show you've been here!
    <ul>
      {participants.map(name => <li><Participant name={name} /></li>)}
    </ul>
  </p>
</div>
