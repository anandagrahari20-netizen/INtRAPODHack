import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>

      <div style={styles.logo}>
        <div style={styles.logoIcon}>▣</div>
        <h2>SpendWise</h2>
      </div>

      <div style={styles.links}>

        <Link to="/Dashboard" style={styles.link}>
          Dashboard
        </Link>

        <Link to="/Expenses" style={styles.link}>
          Expenses
        </Link>

        <Link to="/ScanReceipt" style={styles.activeLink}>
          Scan Receipt
        </Link>

        <Link to="/Budgets" style={styles.link}>
          Budgets
        </Link>

        <Link to="/SplitBill" style={styles.link}>
          Split Bill
        </Link>

      </div>

      <div style={styles.rightSide}>

        <button style={styles.addButton}>
          + Add Expense
        </button>

        <div style={styles.profile}>
          👤
        </div>

      </div>

    </nav>
  );
}

const styles = {

  navbar: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 50px",
    backgroundColor: "#FFF8F5",
    borderBottom: "1px solid #E8DDD6",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#241C18",
  },

  logoIcon: {
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    padding: "10px",
    borderRadius: "10px",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  link: {
    textDecoration: "none",
    color: "#241C18",
    fontSize: "14px",
  },

  activeLink: {
    textDecoration: "none",
    color: "#241C18",
    backgroundColor: "#E8DDD6",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "600",
  },

  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  addButton: {
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "15px",
    cursor: "pointer",
  },

  profile: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#E8DDD6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Navbar;