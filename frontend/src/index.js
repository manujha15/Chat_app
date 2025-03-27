import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18+
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

// ✅ Use createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
