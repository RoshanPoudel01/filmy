import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { router } from './helper/Router';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <ThemeProvider>
  <CssBaseline>
    <RouterProvider router={router} />
  </CssBaseline>,
    </ThemeProvider>
);
