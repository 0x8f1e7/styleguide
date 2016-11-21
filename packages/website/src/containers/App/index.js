import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import { ComponentPage, Splash, NotFound } from 'containers';
import { MatchAsync, Sidebar } from 'components';
import * as StyleguideComponents from 'auth0-styleguide-react-components';
import * as StyleguideComponentsExamples from 'auth0-styleguide-react-components/lib/examples';
import StyleguideComponentsDocs from 'auth0-styleguide-react-components/lib/docs.json';
import './index.styl';
import { version } from '../../../package.json';

const componentsCollection = generateComponentsCollection(StyleguideComponents);

const App = () => (
  <HashRouter>
    <div>
      <Sidebar version={version} items={componentsCollection} />
      <main className="styleguide-content">
        <Match pattern="/" exactly render={() => <Splash version={version} />} />
        {componentsCollection.map((component, index) =>
          <div key={index}>
            <Match
              pattern={component.url}
              render={() => (<ComponentPage {...component} />)}
            />
            <MatchAsync
              pattern={`${component.url}/stage/:example`}
              getComponent={() => System.import('containers/ComponentEditor')}
              componentProps={{ ...component }}
            />
          </div>
        )}
        <Miss component={NotFound} />
      </main>
    </div>
  </HashRouter>
);

export default App;

function generateComponentsCollection(listOfComponents) {
  return Object.keys(listOfComponents)
    .map(component => {
      const doc = StyleguideComponentsDocs[component];
      const examples = StyleguideComponentsExamples[component];
      if (!doc || !examples) return null;
      const [title, descriptionRaw] = doc.description.split(':');
      const description = descriptionRaw.slice(1);

      return {
        title,
        description,
        url: toURL(title),
        component: listOfComponents[component],
        props: doc.props,
        name: component,
        examples,
        reactBootstrap: doc['react-bootstrap']
      };
    })
    .filter(component => !!component);
}

function toURL(text) {
  return `/${toDashCase(text)}`;
}

function toDashCase(text) {
  const phase1 = text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const phase2 = phase1.replace(' ', '-');
  return phase2;
}
