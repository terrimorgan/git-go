import React from 'react';
import Highlight from 'react-highlight';


export default
<div className="each-fade">
  <h2>How do I work with others?</h2>
  <p>
    Use a git host!
    <br></br>
    <br></br>
    Git has built-in support for a <b>remote</b>, which means a git host
    <br></br>
    <b>GitHub</b>, <b>GitLab</b>, and <b>Bitbucket</b> offer free hosting for git repos, and have tools for managing a project
    <br></br>
    <br></br>
    You <b>push</b> your repo to the remote, others then <b>pull</b> the repo
  </p>
  <Highlight className="shell">
    {`git remote add origin https://github.com/Zulu-Inuoe/tmp.git
git push -u origin master`}
  </Highlight>
</div>
