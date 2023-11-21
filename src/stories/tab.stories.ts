import type { Meta, StoryObj } from "@storybook/angular";
import { TabComponent } from "src/app/components/tab/tab.component";



// story meta config
export default {
    title: "Tab",
    component: TabComponent,
} as Meta;



// stories
type Tab = StoryObj<TabComponent>;


export const primary: Tab = { args: {
    label: 'moves',
    selectedTab: true,
    type: '#A8B732'
} };