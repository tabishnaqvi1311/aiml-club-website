import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    hacker_red:'#EC3750',
    hacker_blue:'#000249'
  },
  fonts: {
    heading: `'Libre Franklin Variable', sans-serif`,
    body: `'Libre Franklin Variable', sans-serif`,
  },
});

export default theme;
