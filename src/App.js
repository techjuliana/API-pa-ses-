import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import Home from "./pages/home";
import Header from "./components/header";
import { Container } from "./styled";

function App() {
  const [theme, setTheme] = useState("light");
  const [comentario, setComentario] = useState([]);

function pegandoComentario() {
  fetch('https://restcountries.com/v3.1/all')
  .then((resp) => resp.json())
// .then((resp) => console.log(resp))
 .then((name) => {
  setComentario(name)
 });
}

useEffect(() => {
  pegandoComentario();
}, []);


//MUDAR COR 
  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header funcao={themeToggler} />

        {comentario?.map((name, index) => (
        <Home key={index}
        img ={name.flags.png}
        pais={name.name.common}
        populacao = {name.population}
        regiao = {name.region}
        capital = {name.capital} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
