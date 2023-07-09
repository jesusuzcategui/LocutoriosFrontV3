import { reactive } from "vue";

export const store = reactive({
    sliders: [],
    setSliders(data){
        this.sliders = data;
    }
})