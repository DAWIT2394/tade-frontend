const Footer = () => (
  <footer style={{
    background: 'linear-gradient(135deg, #111827, #1f2937)',
    color: 'white',
    padding: '64px 0 32px',
    marginTop: 'auto',
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    }}>
      {/* Main Footer Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px',
        marginBottom: '48px',
      }}>
        {/* Brand Section */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
          }}>
            <span style={{
              fontSize: '32px',
            }}>👣</span>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #f472b6, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Nexus Modeling</h3>
          </div>
          <p style={{
            color: '#d1d5db',
            lineHeight: '1.6',
            marginBottom: '16px',
          }}>
            Ethiopia's Premier Modeling & Management School — Where Dreams Meet the Runway
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
          }}>
            {['📘', '📷', '🎥', '📱'].map((icon, index) => (
              <a
                key={index}
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
          }}>Quick Links</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
          }}>
            {['Home', 'Courses', 'About Us', 'Contact', 'Register'].map((link, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <a
                  href={`/${link.toLowerCase().replace(' ', '')}`}
                  style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f472b6';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#d1d5db';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
          }}>Our Programs</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
          }}>
            {['Runway Training', 'Personal Development', 'Portfolio Building', 'Industry Connections', 'Workshops'].map((program, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <a
                  href="#"
                  style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#a855f7';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#d1d5db';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {program}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
          }}>Contact Us</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
          }}>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              color: '#d1d5db',
            }}>
              <span>📍</span>
              <span>Addis Ababa, Ethiopia</span>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              color: '#d1d5db',
            }}>
              <span>📞</span>
              <a href="tel:+251940848080" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f472b6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                +251 940 848 080
              </a>
            </li>
            <li style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              color: '#d1d5db',
            }}>
              <span>✉️</span>
              <a href="mailto:info@nexusmodeling.com" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                info@nexusmodeling.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #4b5563, transparent)',
        margin: '32px 0',
      }}></div>

      {/* Copyright Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#9ca3af',
          fontSize: '14px',
        }}>
          &copy; {new Date().getFullYear()} Nexus Modeling School. All Rights Reserved.
        </p>
        <div style={{
          display: 'flex',
          gap: '24px',
        }}>
          <a href="#" style={{
            color: '#9ca3af',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#f472b6'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
            Privacy Policy
          </a>
          <a href="#" style={{
            color: '#9ca3af',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;