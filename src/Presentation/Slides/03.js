import React from 'react';
import Highlight from 'react-highlight';
import git_logo from '../../images/git-logo.svg';

export default
<div className="each-fade">
  <h2>What is <img width="64px" src={git_logo} alt="Git Logo" />?</h2>
  <p>
    <b>Git</b> is a source control tool - <a href="https://git-scm.com/">https://git-scm.com/</a>
    <br></br>
    <br></br>
    Specifically, a <b>distributed version control system</b>
  </p>
  <p>
    A git <b>repo</b> (repository) is a group of files and their history
    <br></br>
    <br></br>
    You <b>stage</b> a group of changes and create a commit
  </p>
  <Highlight className="shell">
    {`git init
echo "Hello, world!" > file.txt
git add file.txt
git commit -m "Initial commit"`}
  </Highlight>
  <p>Think of a repo as a database (some are used this way!)</p>
</div>
