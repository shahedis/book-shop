import MyBox from '../components/MyBox.vue'

export default {
    component: MyBox,
    title: 'Components/MyBox'
}

export const Primary = () =>{
    components: { MyBox },
    template: "<MyBox primary label="bb" />"
}