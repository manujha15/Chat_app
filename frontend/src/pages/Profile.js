import React, { useEffect, useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userId = storedUser ? storedUser._id : null;

    if (!userId) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/profile/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔍 Profile API Response:", data); // Debugging
        if (data.message === "User not found") {
          setUser(null);
        } else {
          setUser(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (!user) return <h2>User not found</h2>;

  return (
    <div className="profile-container">
      <img 
        src={user.profilePic ? user.profilePic : "https://via.placeholder.com/150"} 
        alt="Profile" 
      />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
