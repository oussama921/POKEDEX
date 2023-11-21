import type { Meta, StoryObj } from "@storybook/angular";
import { PokemonCardComponent } from "src/app/components/pokemon-card/pokemon-card.component";



// story meta config
export default {
    title: "PokemonCard",
    component: PokemonCardComponent,
} as Meta;



// stories
type PokemonCard = StoryObj<PokemonCardComponent>;


export const primary: PokemonCard = { args: {
    name: 'charmander',
    size: 'lg'
} };