'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// src/Foo/index.js
function index (props) {
  return React.createElement("button", {
    style: {
      fontSize: props.size === 'large' ? 40 : 20
    }
  }, props.children);
}

exports.Foo = index;
