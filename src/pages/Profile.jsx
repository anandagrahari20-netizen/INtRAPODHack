import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function logout() {
    navigate("/Login");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Profile</h2>
        <p style={styles.subtitle}>Basic account details only.</p>

        <div style={styles.infoRow}>
          <span style={styles.label}>Name</span>
          <span style={styles.value}>User</span>
        </div>

        <div style={styles.infoRow}>
          <span style={styles.label}>Email</span>
          <span style={styles.value}>user@example.com</span>
        </div>

        <button onClick={logout} style={styles.logout}>
          Log Out
        </button>

        <Link to="/Dashboard" style={styles.back}>
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#FFF8F5",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
  },

  card: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid #E8DDD6",
  },

  title: {
    margin: 0,
    fontSize: "24px",
    color: "#241C18",
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#766A63",
    fontSize: "13px",
  },

  infoRow: {
    marginTop: "16px",
    padding: "12px 0",
    borderTop: "1px solid #E8DDD6",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
  },

  label: {
    color: "#766A63",
    fontSize: "14px",
  },

  value: {
    color: "#241C18",
    fontSize: "14px",
  },

  logout: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    border: "1px solid #E8DDD6",
    borderRadius: "14px",
    backgroundColor: "#FFF8F5",
    color: "#8B6845",
  },

  back: {
    display: "block",
    textAlign: "center",
    marginTop: "18px",
    color: "#8B6845",
    textDecoration: "none",
  },
};

export default Profile;