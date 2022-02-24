import components from '@/components';

// export * from "../components"
const install = (app) => {
  components.forEach((component) => app.use(component));
};

var index = {
  install,
};

export { index as default };
