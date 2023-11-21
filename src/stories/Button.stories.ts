import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "src/app/components/button/button.component";



// story meta config
export default {
    title: "MainButton",
    component: ButtonComponent,
} as Meta;



// stories
type MainButton = StoryObj<ButtonComponent>;


export const primary: MainButton = { args: {
    label: 'search'
} };