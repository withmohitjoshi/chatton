import { PaletteColorOptions } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    dark: PaletteColor;
  }
  interface PaletteOptions {
    dark?: PaletteColorOptions;
  }
}
