import { createElement } from 'react';

// src/Foo/index.js
function index (props) {
  return createElement("button", {
    style: {
      fontSize: props.size === 'large' ? 40 : 20
    }
  }, props.children);
}

export { index as Foo };
