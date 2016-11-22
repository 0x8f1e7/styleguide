import React, { PropTypes } from 'react';
import hljs from 'highlight.js';
import './index.styl';

const usageBundler = `import { Select } from 'auth0-styleguide-react-components';

const App = () => <Select options={['Zoey Andrews', 'Jerry Woods', 'Marion Garza']} />;

export default App;`;

const usageCDN = (version) =>
`<link rel="stylesheet" href="https://cdn.auth0.com/styleguide-react-components/${version}/react-components.css" />
<script src="https://cdn.auth0.com/styleguide-react-components/${version}/react-components.js"></script>`;

class Splash extends React.Component {
  componentDidMount() {
    this.codeExamples = [].slice.call(document.querySelectorAll('.splash-page code'));
    hljs.configure({ classPrefix: '' });
    this.codeExamples.forEach(block => {
      hljs.highlightBlock(block);
    });
  }

  componentDidUpdate() {
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting.called = false;
    this.codeExamples.forEach(block => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    return (
      <section className="splash-page">
        <h1 className="splash-title">Getting started</h1>

        <div className="splash-section">
          <h2 className="title">From NPM</h2>

          <div className="example-box">
            <p>To install the latest version:</p>
            <pre>
              <code className="bash">
                {`npm i --save auth0/styleguide#react-components-${this.props.version}`}
              </code>
            </pre>
          </div>

          <div className="example-box">
            <p>To use the react components:</p>
            <pre>
              <code className="javascript">{usageBundler}</code>
            </pre>
          </div>
        </div>

        <div className="splash-section">
          <h2 className="title">From CDN</h2>

          <div className="example-box">
            <p>To install the latest version:</p>
            <pre>
              <code className="bash">{usageCDN(this.props.version)}</code>
            </pre>
          </div>
        </div>

      </section>
    );
  }
}

Splash.propTypes = {
  version: PropTypes.string.isRequired
};

export default Splash;
