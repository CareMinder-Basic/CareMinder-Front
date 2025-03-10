import type { Preview } from "@storybook/react";
import React from "react";
import '@careminder/fonts/dist/index.css'; 


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      
        <Story />
      
    ),
  ],
};

export default preview;
