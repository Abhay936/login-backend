import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard (Protected)</h2>
      <p>You are logged in ✅</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;