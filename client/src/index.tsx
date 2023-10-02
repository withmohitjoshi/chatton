import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./config/theme";
import { FullPageLoader } from "./widgets/Loaders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: false,
    },
  },
});
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<FullPageLoader />}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
