import "./App.css";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#0D1117",
          border: "solid 1px #282d35",
          color: "red",
          borderRadius: "0.4rem",
          marginBottom: "1rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#E38282", //Meets WCAG AAA for contrast
          },
        },
      },
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
