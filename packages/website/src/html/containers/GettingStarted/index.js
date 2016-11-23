import React from 'react';

const cdnExample = '<link href="https://cdn.auth0.com/styleguide/0.0.1/index.min.css" rel="stylesheet" />';
const githubExample = (
`git clone https://github.com/auth0/styleguide.git
cd styleguide 
grunt dev`
);

const GettingStarted = () =>
  <div className="html-styleguide-section getting-started-section">
    <section className="jumbotron">
      <h2><img src="/lib/logos/img/icon-styleguide.svg" role="presentation" /></h2>
      <h1>Getting started</h1>
      <p>There are few ways to initialize depending on the use case.</p>
    </section>
    <section>
      <h2 id="from-cdn">From CDN</h2>
      <p>
        Using our CDN is the simplest solution.
        Just add the following lines in your projects HTML head and you are done.
      </p>
      <pre><hl>{cdnExample}</hl></pre>
    </section>
    <section>
      <h2 id="from-gh">Installing from Github</h2>
      <p>
        Clone the repository to your computer. If you want more information
        <a
          href="https://github.com/auth0/styleguide/blob/master/README.md"
          target="_blank" rel="noopener noreferrer"
        >
          read here.
        </a>
      </p>
      <pre className="hl">
        <code className="html">
          {githubExample}
        </code>
      </pre>
    </section>
  </div>;

export default GettingStarted;

