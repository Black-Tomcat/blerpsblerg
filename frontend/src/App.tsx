import React from "react";

import { Container, Typography } from "@material-ui/core";
import TextEditor from "./components/TextEditor";


function App() {
    return (
        <Container color="inherit">
            {/*<main>*/}
                <Typography variant={"h1"}>Blerpsblerg</Typography>
                <Typography variant={"subtitle1"}>Where all your greatest dreams come from</Typography>
                <TextEditor/>
            {/*</main>*/}
        </Container>
    );
}

export default App;
