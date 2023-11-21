import type { Meta, StoryObj } from "@storybook/angular";
import { PokemonNotFoundComponent } from "../app/pages/pokemon-not-found/pokemon-not-found.component";
 
 
// story meta config
export default {
 title: "NotFound",
 component: PokemonNotFoundComponent,
} as Meta;
 
 
 
// stories
type NotFound = StoryObj<PokemonNotFoundComponent>;
 
 
export const primary: NotFound = {args: {}};
