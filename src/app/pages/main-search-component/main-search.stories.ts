import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MainSearchComponent } from "./main-search.component";
import { GraphQLModule } from "src/app/graphql.module";
import { AppComponent } from "src/app/app.component";
import { PokemonService } from "src/app/services/pokemon.service";


const meta: Meta<MainSearchComponent> = {
    title: 'mainSearch',
    component: MainSearchComponent,
    decorators: [
        moduleMetadata({
          imports: [GraphQLModule],
          declarations: [AppComponent],
          providers:[PokemonService]
        })
    ],
    
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (args: MainSearchComponent) => ({
      template: `'<app-main-search></app-main-search>`,
    }),
  };
  
  export default meta;
  type Story = StoryObj<MainSearchComponent>;