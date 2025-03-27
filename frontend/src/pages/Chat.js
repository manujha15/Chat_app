import React, { useState } from "react";
import { TextField, Button, Container, Card, Typography, List, ListItem, ListItemText } from "@mui/material";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("User 1");

    const sendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sender: user, timestamp: new Date().toLocaleTimeString() }]);
            setMessage("");
            setUser(user === "User 1" ? "User 2" : "User 1"); // Toggle user
        }
    };

    return (
        <Container maxWidth="lg">
            <Card style={styles.card}>
                <Typography variant="h4" align="center" gutterBottom>
                    Chat
                </Typography>
                <List style={styles.chatBox}>
                    {messages.map((msg, index) => (
                        <ListItem key={index} style={msg.sender === "User 1" ? styles.messageRight : styles.messageLeft}>
                            <ListItemText primary={msg.text} secondary={`${msg.sender} • ${msg.timestamp}`} />
                        </ListItem>
                    ))}
                </List>
                <div style={styles.inputContainer}>
                    <TextField
                        fullWidth
                        label="Type a message"
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={sendMessage} style={styles.button}>
                        Send
                    </Button>
                </div>
            </Card>
        </Container>
    );
};

const styles = {
    card: { padding: "40px", marginTop: "50px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", minHeight: "600px" },
    chatBox: { minHeight: "500px", overflowY: "auto", marginBottom: "20px" },
    messageRight: { background: "#DCF8C6", alignSelf: "flex-end", borderRadius: "10px", margin: "5px", padding: "10px", textAlign: "right" },
    messageLeft: { background: "#EAEAEA", alignSelf: "flex-start", borderRadius: "10px", margin: "5px", padding: "10px", textAlign: "left" },
    inputContainer: { display: "flex", gap: "10px", marginTop: "20px" },
    button: { height: "55px" },
};

export default Chat;
