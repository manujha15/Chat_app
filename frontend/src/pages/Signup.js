import React, { useState } from "react";
import { Container, TextField, Button, Avatar, Typography, Card, CircularProgress } from "@mui/material";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [about, setAbout] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState(null); // Image preview
    const [loading, setLoading] = useState(false); // ✅ Added loading state

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("about", about);
        formData.append("profilePic", document.querySelector('input[type="file"]').files[0]); // ✅ Corrected
    
        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                body: formData,
            });
    
            const result = await response.json();
            console.log("✅ Response:", result);
    
            if (response.ok) {
                alert("✅ Signup Successful!");
            } else {
                alert("❌ Signup Failed: " + result.message);
            }
        } catch (error) {
            console.error("❌ Error:", error);
            alert("⚠ An error occurred. Check console for details.");
        } finally {
            setLoading(false);
        }
    };
    
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setProfilePic(reader.result); // Assuming you have a state for profilePic
          };
          reader.readAsDataURL(file);
        }
      };
      

    return (
        <Container maxWidth="sm">
            <Card style={styles.card}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>

                <Avatar src={preview} style={styles.avatar} />

                <input type="file" onChange={handleImageUpload} accept="image/*" style={styles.inputFile} />

                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" required />
                    <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
                    <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
                    <TextField fullWidth label="About" value={about} onChange={(e) => setAbout(e.target.value)} margin="normal" />

                    <Button type="submit" variant="contained" color="primary" fullWidth style={styles.button} disabled={loading}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                    </Button>
                </form>
            </Card>
        </Container>
    );
};

const styles = {
    card: { padding: "40px", marginTop: "50px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px" },
    avatar: { width: "100px", height: "100px", margin: "auto", marginBottom: "20px" },
    inputFile: { display: "block", margin: "auto", marginBottom: "20px" },
    button: { marginTop: "20px" },
};

export default Signup;
