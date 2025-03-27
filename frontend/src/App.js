import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

function App() {
    return (
        <Router>
            <AppBar position="static" color="primary">
                <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button color="inherit" component={Link} to="/">Login</Button>
                    <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    <Button color="inherit" component={Link} to="/chat">Chat</Button>
                    <Button color="inherit" component={Link} to="/profile">Profile</Button>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" style={{ marginTop: "40px" }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
