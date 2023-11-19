import type { Meta, StoryObj } from "@storybook/angular";
import { MainSearchComponent } from "src/app/pages/main-search-component/main-search.component";
 
// story meta config
const meta: Meta<MainSearchComponent> = {
 title: "Pokemon/MainSearch",
 component: MainSearchComponent
};
export default meta;
 
 
 
 
// stories
type MainSearchStory = StoryObj<MainSearchComponent>;
 
 
export const primary: MainSearchStory = {};