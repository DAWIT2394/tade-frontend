const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        👣 Nexus Modeling School & Management
      </h3>

      <p style={{ marginBottom: "10px" }}>
        Addis Ababa, Ethiopia
      </p>

      <p style={{ marginBottom: "10px" }}>
        📞 +251 940 848 080 | ✉️ info@nexusmodeling.com
      </p>

      <div style={{ marginBottom: "10px" }}>
        <a
          href="/"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        <a
          href="/courses"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          Courses
        </a>

        <a
          href="/contact"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </div>

      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
        © {new Date().getFullYear()} Nexus Modeling School. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;