'use strict';

var components = require('@/components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var components__default = /*#__PURE__*/_interopDefaultLegacy(components);

// export * from "../components"
const install = (app) => {
  components__default["default"].forEach((component) => app.use(component));
};

var index = {
  install,
};

module.exports = index;
