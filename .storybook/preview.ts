import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { MockedProvider } from '@apollo/client/testing'; 
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
    },
  
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
