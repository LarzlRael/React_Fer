import '@testing-library/jest-dom';

// 1.enzyme
//* npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 enzyme
// 2. enzyne to Json

//* $ npm install --save-dev enzyme-to-json

// 3. should to show the componente correctly

//? 

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { createSerializer } from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });

// for tu use the view componenet html
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));