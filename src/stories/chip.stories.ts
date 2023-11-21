import type { Meta, StoryObj } from "@storybook/angular";
import { ChipComponent } from "src/app/components/chip/chip.component";



// story meta config
export default {
    title: "Chip",
    component: ChipComponent,
} as Meta;



// stories
type Chip = StoryObj<ChipComponent>;


export const primary: Chip = { args: {
    label: 'Fire',
    type: 'fire'
} };