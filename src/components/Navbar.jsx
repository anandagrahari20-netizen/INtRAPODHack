import { Link, NavLink } from "react-router-dom";
import { UserCircle2 } from "lucide-react";

const navItems = [
  { to: "/Dashboard", label: "Dashboard" },
  { to: "/Expenses", label: "Expenses" },
  { to: "/ScanReceipt", label: "Scan Receipt" },
  { to: "/Budgets", label: "Budgets" },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>

      <div style={styles.logo}>
        <div style={styles.logoIcon}>▣</div>
        <h2>SpendWise</h2>
      </div>

      <div style={styles.links}>

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            {item.label}
          </NavLink>
        ))}

      </div>

      <div style={styles.rightSide}>

        <Link to="/AddExpense" style={styles.addButton}>
          + Add Expense
        </Link>

        <Link to="/Profile" style={styles.profile}>
          <UserCircle2 size={18} strokeWidth={1.8} />
          <span>Profile</span>
        </Link>

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
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "transparent",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },

  activeLink: {
    textDecoration: "none",
    color: "#241C18",
    backgroundColor: "#E8DDD6",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "600",
    transition: "background-color 0.2s ease, color 0.2s ease",
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
    textDecoration: "none",
  },

  profile: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "9px 14px",
    borderRadius: "999px",
    backgroundColor: "#E8DDD6",
    color: "#241C18",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Navbar;