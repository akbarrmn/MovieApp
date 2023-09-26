import { createTheme } from "@mui/material";

export const Theme = createTheme({
    breakpoints:{
      values:{
        xs:0,
        sm:600,
        md:900,
        xl:1400
      }
    },
    typography:{
      button:{
        textTransform:'none'
      }
    }

  });
