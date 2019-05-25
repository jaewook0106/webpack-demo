
// var _ = require('lodash');  //lodash 가져오기

import _ from 'lodash';

import {area, circumference} from './js/circle';
import cube from './js/cube'   //default import 는 {}가 없고 이름을 마음대로 정할 수 있다.

import './css/style.css';
import './css/hello.scss';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!!!!'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(10), circumference(10))
console.log(cube(3))