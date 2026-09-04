import { useState } from "react";

function ContactPicker() {
  const [contacts, setContacts] = useState([]);

  const sampleContacts = [
    {
      name: "Akash",
      phone: "9876543210",
    },
    {
      name: "Anand",
      phone: "9123456780",
    },
    {
      name: "Anish",
      phone: "9988776655",
    },
    {
      name: "Rahul",
      phone: "9090909090",
    },
    {
      name: "Aryan",
      phone: "6372756416",
    },
  ];

  async function getContacts() {
    if (!("contacts" in navigator)) {
      alert(
        "Contact picker is not supported. Sample contacts will be shown."
      );

      setContacts(sampleContacts);
      return;
    }

    try {
      const properties = ["name", "tel"];

      const options = {
        multiple: true,
      };

      const selectedContacts =
        await navigator.contacts.select(
          properties,
          options
        );

      setContacts(selectedContacts);
    } catch (error) {
      console.log("Contact selection cancelled");
    }
  }

  return (
    <div style={styles.box}>

      <h2 style={styles.title}>
        Select Contacts
      </h2>

      <p style={styles.subtitle}>
        Select people to split the bill with
      </p>

      <button
        onClick={getContacts}
        style={styles.button}
      >
        📱 Choose from Contacts
      </button>

      {contacts.map((contact, index) => (
        <div
          key={index}
          style={styles.contact}
        >

          <div style={styles.avatar}>
            {contact.name?.[0] || "?"}
          </div>

          <div style={styles.details}>

            <b style={styles.name}>
              {contact.name || "Unknown"}
            </b>

            <p style={styles.phone}>
              {contact.tel?.[0] ||
                contact.phone ||
                "No phone number"}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}

const styles = {
  box: {
    width: "400px",
    padding: "25px",
    backgroundColor: "#FFF8F5",
    border: "1px solid #E8DDD6",
    borderRadius: "16px",
  },

  title: {
    margin: "0",
    color: "#241C18",
    fontSize: "22px",
  },

  subtitle: {
    marginTop: "6px",
    marginBottom: "20px",
    color: "#766A63",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "22px",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "15px",
  },

  contact: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    marginTop: "8px",
    border: "1px solid #E8DDD6",
    borderRadius: "10px",
    backgroundColor: "#FFF8F5",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  details: {
    flex: "1",
  },

  name: {
    color: "#241C18",
    fontSize: "14px",
  },

  phone: {
    margin: "3px 0 0",
    color: "#766A63",
    fontSize: "12px",
  },
};

export default ContactPicker;