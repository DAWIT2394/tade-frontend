const Footer = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@nexus_modeling?si=wWrJXo2HOxn1_SUN",
      icon: "📺",
      color: "#ff0000"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/p/1CVDiqPCVW/?mibextid=wwXIfr",
      icon: "📘",
      color: "#1877f2"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@nexusmodelingethiopia?_r=1&_t=ZS-96wOW2LZJmn",
      icon: "🎵",
      color: "#000000"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/official_tade_12?igsh=dXFzdGRkMzJwMGw2&utm_source=qr",
      icon: "📷",
      color: "#e4405f"
    },
    {
      name: "Telegram",
      url: "https://t.me/Nexus_modeling_management",
      icon: "📱",
      color: "#26A5E4"
    }
  ];

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

      <p style={{ marginBottom: "5px" }}>
        📍 Addis Ababa, Ethiopia
      </p>

      <p style={{ 
        marginBottom: "10px", 
        fontSize: "13px", 
        color: "#d1d5db",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        አያት አደባባይ ወርድ ብሎ ዙርያሽ ሞል ፍት ለፍት ለሚ ኩራ ክ/ከተማ ጋር
      </p>

      <p style={{ marginBottom: "10px" }}>
        📞 +251 94 084 8080 | ✉️ info@nexusmodeling.com
      </p>

      {/* Social Media Links */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "14px", marginBottom: "12px", color: "#9ca3af" }}>
          Follow & Connect With Us
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "#1f2937",
                borderRadius: "40px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = social.color;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1f2937";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "18px" }}>{social.icon}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Telegram Channel Info */}
      <div
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          backgroundColor: "#1e293b",
          borderRadius: "12px",
          maxWidth: "350px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ fontSize: "12px", color: "#26A5E4" }}>
          📱 Telegram Channel: <strong>@Nexus_modeling_management</strong>
        </p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <a
          href="/"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#ec4899"}
          onMouseLeave={(e) => e.target.style.color = "#fff"}
        >
          Home
        </a>

        <a
          href="/courses"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#ec4899"}
          onMouseLeave={(e) => e.target.style.color = "#fff"}
        >
          Courses
        </a>

        <a
          href="/register"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#ec4899"}
          onMouseLeave={(e) => e.target.style.color = "#fff"}
        >
          Register
        </a>

        <a
          href="/contact"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => e.target.style.color = "#ec4899"}
          onMouseLeave={(e) => e.target.style.color = "#fff"}
        >
          Contact
        </a>
      </div>

      {/* Location Details Card */}
      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          padding: "12px",
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ fontSize: "13px", marginBottom: "5px", fontWeight: "bold" }}>
          📍 ዝርዝር አድራሻ (Detailed Address)
        </p>
        <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
          አያት አደባባይ ወርድ ብሎ ዙርያሽ ሞል ፍት ለፍት ለሚ ኩራ ክ/ከተማ ጋር
        </p>
        <p style={{ fontSize: "11px", color: "#ec4899", marginTop: "8px" }}>
          📞 ለበለጠ መረጃ: 0940848080
        </p>
      </div>

      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
        © {new Date().getFullYear()} Nexus Modeling School. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;