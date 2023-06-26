import _ from 'lodash';

import myName from './myName';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Using my function.
  element.textContent = myName('Walter') 

   return element;
 }

 document.body.appendChild(component());
