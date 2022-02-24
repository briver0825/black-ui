// export * from "../components"
import components from "../components/index"
const install = (app) => {
  components.forEach((component) => app.use(component))
}

export default {
  install,
}
