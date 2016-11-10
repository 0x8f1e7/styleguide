import React from 'react';
import Select from './';

const examples = [
  {
    component: (
      <Select
        options={[
          'Zoey Andrews',
          'Jerry Woods',
          'Marion Garza'
        ]}
        selected={2}
        handleChange={(e) => { console.log(e.target.value); }}
        label="Select user"
      />
    ),
    code: (
`
<Select
  options={[
    'Zoey Andrews',
    'Jerry Woods',
    'Marion Garza'
  ]}
  selected={2}
  handleChange={(e) => { console.log(e.target.value); }}
  label="Select user"
/>
`
    )
  }
];

export default examples;
