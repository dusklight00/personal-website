import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: `'Wotfard', sans-serif`,
  body: `'Wotfard', sans-serif`,
};

const config = {};

const theme = extendTheme({ config, fonts });

export default theme;
