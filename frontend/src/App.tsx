import React from "react";

import { Box, Container, Typography } from "@material-ui/core";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Box color="inherit">
            {/*<main>*/}
            <Container>
                <Typography variant={"h1"}>Blerpsblerg</Typography>
                <Typography variant={"subtitle1"}>
                    Where all your greatest dreams come from
                </Typography>
            </Container>
            <Navbar />
            <Container>
                <TextEditor />
            </Container>
            {/*</main>*/}
        </Box>
    );
}

export default App;
