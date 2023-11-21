import type { Meta, StoryObj } from "@storybook/angular";
import { ArrowComponent } from "src/app/components/arrow/arrow.component";



// story meta config
export default {
    title: "Arrow",
    component: ArrowComponent,
} as Meta;



// stories
type Arrow = StoryObj<ArrowComponent>;


export const primary: Arrow = { args: {
    color: '#EE803B'
} };