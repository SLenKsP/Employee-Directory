import React from "react";
import Main from "./Pages/main";
import Header from './components/Header/header';
import Container from "./components/Container/container";

function App() {
    return (
        <div>
            <Header/>
            <Container>
                <Main/>
            </Container>
        </div>
    )
};

export default App;