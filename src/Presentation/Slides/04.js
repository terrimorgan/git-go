import React from 'react';
import Highlight from 'react-highlight';

export default
<div className="each-fade">
  <h2>Branches</h2>
  <p>
    A <b>branch</b> is really just a ‘pointer’ to a specific commit
    <br></br>
    Used to work on working on specific features, exploratory code, releases, etc.
  </p>
  <Highlight className="shell">
    {`git branch mybranch
git branch --list
git checkout mybranch`}
  </Highlight>
  <p>
    git <b>checkout</b> will set your current branch, and will set your local files to match
    <br></br>
    <br></br>
    Every git repo starts with a branch named <b>master</b>
    <br></br>
    <br></br>
    Branches allow concurrent work
  </p>
</div>