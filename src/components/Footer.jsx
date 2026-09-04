function Footer() {
  return (
    <footer style={styles.footer}>

      <div>
        <b style={styles.logo}>SpendWise</b>
        <span> — Mindful personal finance</span>
        <p style={styles.hackathon}>
          Made for WebWiz Intrapod Hackathon
        </p>
      </div>

      <div style={styles.links}>
        <a href="#" style={styles.link}>Privacy Policy</a>
        <a href="#" style={styles.link}>Terms of Service</a>
      </div>

    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 48px",
    backgroundColor: "#FFF8F5",
    borderTop: "1px solid #E8DDD6",
    color: "#766A63",
    fontSize: "13px",
  },

  logo: {
    color: "#8B6845",
    fontSize: "16px",
  },

  hackathon: {
    margin: "6px 0 0",
    color: "#766A63",
    fontSize: "12px",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "#766A63",
    textDecoration: "none",
  },
};

export default Footer;