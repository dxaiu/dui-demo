import DButton from './components/button.vue'

const components = [
  DButton
]

export default function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
