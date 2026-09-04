import { useState } from "react";
import ContactPicker from "./ContactPicker";

function SplitModal({ closeModal }) {

  const [showContacts, setShowContacts] = useState(false);

  return (
    <div style={styles.overlay}>

      <div style={styles.modal}>

        <button
          onClick={closeModal}
          style={styles.close}
        >
          ✕
        </button>

        <h2>Split Bill</h2>

        <p style={styles.text}>
          Total Amount
        </p>

        <h1 style={styles.amount}>₹420</h1>

        <button
          onClick={() => setShowContacts(true)}
          style={styles.contactButton}
        >
          📱 Choose from Contacts
        </button>

        <p style={styles.or}>or</p>

        <input
          type="text"
          placeholder="Enter name"
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Enter phone number"
          style={styles.input}
        />

        <button style={styles.addButton}>
          + Add Person
        </button>

        <button style={styles.splitButton}>
          Split Bill
        </button>

        {showContacts && (
          <div style={styles.contacts}>
            <ContactPicker />
            
            <button
              onClick={() => setShowContacts(false)}
              style={styles.done}
            >
              Done
            </button>
          </div>
        )}

      </div>

    </div>
  );
}

const styles = {

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "380px",
    padding: "25px",
    backgroundColor: "#FFF8F5",
    borderRadius: "16px",
    position: "relative",
  },

  close: {
    position: "absolute",
    right: "20px",
    top: "15px",
    border: "none",
    background: "none",
    fontSize: "18px",
    cursor: "pointer",
  },

  text: {
    color: "#766A63",
  },

  amount: {
    color: "#8B6845",
  },

  contactButton: {
    width: "100%",
    padding: "12px",
    border: "1px solid #8B6845",
    borderRadius: "20px",
    backgroundColor: "#FFF8F5",
    color: "#8B6845",
    cursor: "pointer",
  },

  or: {
    textAlign: "center",
    color: "#766A63",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #E8DDD6",
    borderRadius: "10px",
  },

  addButton: {
    width: "100%",
    padding: "11px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#E8DDD6",
    color: "#241C18",
    cursor: "pointer",
  },

  splitButton: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    cursor: "pointer",
  },

  contacts: {
    position: "absolute",
    top: "10px",
    left: "10px",
    right: "10px",
    backgroundColor: "#FFF8F5",
    padding: "15px",
    borderRadius: "16px",
  },

  done: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
  },
};

export default SplitModal;
