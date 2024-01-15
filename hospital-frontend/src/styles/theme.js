import { createTheme } from '@mui/material';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailwind.config';

const tailwindConfig = resolveConfig(tailwindConfigModule);

export const Theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.primaryLight,
    },
    secondary: {
      main: tailwindConfig.theme.colors.textLight,
    }
  },
});
