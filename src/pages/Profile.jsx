import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);
  const [notifications, setNotifications] = useState(true);

  function logout() {
    navigate("/login");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>


        <div style={styles.profile}>
          <div style={styles.avatar}>👤</div>
          <h2>User</h2>
          <p style={styles.muted}>user@example.com</p>
          <button style={styles.outlineBtn}>Edit Profile</button>
        </div>

        <div style={styles.balance}>
          <p style={styles.muted}>Available Balance</p>
          <h1>
            {showBalance ? "₹12,500" : "••••••"}
          </h1>

          <button
            onClick={() => setShowBalance(!showBalance)}
            style={styles.smallBtn}
          >
            {showBalance ? "Hide Balance" : "Show Balance"}
          </button>
        </div>

        <div style={styles.section}>
          <h3>Account</h3>

          <div style={styles.option}>
            <div>
              <b>👤 Personal Information</b>
              <p style={styles.muted}>Name, email and profile details</p>
            </div>
            <span>›</span>
          </div>

          <div style={styles.option}>
            <div>
              <b>💳 Payment Methods</b>
              <p style={styles.muted}>Manage your payment methods</p>
            </div>
            <span>›</span>
          </div>
        </div>

        <div style={styles.section}>
          <h3>Finance</h3>

          <div style={styles.option}>
            <div>
              <b>💰 Monthly Budget</b>
              <p style={styles.muted}>Current limit: ₹20,000</p>
            </div>
            <span>›</span>
          </div>

          <div style={styles.option}>
            <div>
              <b>📊 Spending Limit</b>
              <p style={styles.muted}>Set your monthly spending limit</p>
            </div>
            <span>›</span>
          </div>

          <div style={styles.option}>
            <div>
              <b>₹ Currency</b>
              <p style={styles.muted}>Indian Rupee (INR)</p>
            </div>
            <span>›</span>
          </div>
        </div>

        <div style={styles.section}>
          <h3>Preferences</h3>

          <div style={styles.option}>
            <div>
              <b>🔔 Notifications</b>
              <p style={styles.muted}>Expense reminders and alerts</p>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              style={styles.smallBtn}
            >
              {notifications ? "ON" : "OFF"}
            </button>
          </div>

          <div style={styles.option}>
            <div>
              <b>📅 Date Format</b>
              <p style={styles.muted}>DD / MM / YYYY</p>
            </div>
            <span>›</span>
          </div>
        </div>


        <div style={styles.section}>
          <h3>More</h3>

          <div style={styles.option}>
            <div>
              <b>📤 Export Expenses</b>
              <p style={styles.muted}>Download your expense data</p>
            </div>
            <span>›</span>
          </div>

          <div style={styles.option}>
            <div>
              <b>🔒 Privacy & Security</b>
              <p style={styles.muted}>Manage your account security</p>
            </div>
            <span>›</span>
          </div>

          <div style={styles.option}>
            <div>
              <b>❓ Help & Support</b>
              <p style={styles.muted}>Get help with Spendly</p>
            </div>
            <span>›</span>
          </div>
        </div>

        <button onClick={logout} style={styles.logout}>
          Log Out
        </button>

        <Link to="/dashboard" style={styles.back}>
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
    width: "500px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    border: "1px solid #E8DDD6",
  },

  profile: {
    textAlign: "center",
    borderBottom: "1px solid #E8DDD6",
    paddingBottom: "20px",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#E8DDD6",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
  },

  balance: {
    backgroundColor: "#FFF8F5",
    padding: "18px",
    marginTop: "20px",
    borderRadius: "15px",
  },

  section: {
    marginTop: "25px",
  },

  option: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "13px",
    marginBottom: "8px",
    border: "1px solid #E8DDD6",
    borderRadius: "10px",
  },

  muted: {
    color: "#766A63",
    fontSize: "13px",
    margin: "5px 0",
  },

  outlineBtn: {
    padding: "8px 18px",
    border: "1px solid #8B6845",
    borderRadius: "20px",
    backgroundColor: "#FFF8F5",
    color: "#8B6845",
  },

  smallBtn: {
    padding: "7px 12px",
    border: "none",
    borderRadius: "15px",
    backgroundColor: "#8B6845",
    color: "white",
  },

  logout: {
    width: "100%",
    padding: "12px",
    marginTop: "30px",
    border: "1px solid #E8DDD6",
    borderRadius: "20px",
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