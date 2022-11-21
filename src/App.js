import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./pages/home";
import Pais from "./pages/pais";
import Header from "./components/header";

function App() {
  const [theme, setTheme] = useState("light");

  //MUDAR TEMA
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pais/:id" element={<Pais />} />
      </Routes>
      <Header mudarTemaFuncao={themeToggler} />
    </ThemeProvider>
  );
}
export default App;
