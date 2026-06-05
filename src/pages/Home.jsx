import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../services/api';
import heroImage from '../assets/herr.JPG';


const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    students: 0,
    graduates: 0,
    experts: 0,
    workshops: 0
  });

  useEffect(() => {
    // Fetch courses
    getCourses()
      .then((res) => setCourses(res.data))
      .catch(() => console.error("Failed to load courses"))
      .finally(() => setLoading(false));

    // Animate stats counter
    const targets = {
      students: 1250,
      graduates: 890,
      experts: 24,
      workshops: 156
    };
    
    const duration = 2000;
    const stepTime = 20;
    
    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / (duration / stepTime);
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          setStats(prev => ({ ...prev, [key]: targets[key] }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepTime);
    });
  }, []);

  // Styles
  const styles = {
    // Hero Section
    heroContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
      overflow: 'hidden',
    },
    heroImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      zIndex: -1,
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(255,107,107,0.2), rgba(78,205,196,0.2))',
      pointerEvents: 'none',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10,
      width: '100%',
    },
    logoBadge: {
      marginBottom: '32px',
      animation: 'bounce 2s infinite',
    },
    logoBadgeInner: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(12px)',
      borderRadius: '9999px',
      padding: '12px 24px',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
    },
    mainTitle: {
      fontSize: 'clamp(40px, 8vw, 72px)',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.2',
      color: 'white',
    },
    gradientText: {
      background: 'linear-gradient(135deg, #f472b6, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(18px, 4vw, 24px)',
      marginBottom: '32px',
      color: '#e5e7eb',
      maxWidth: '768px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    secondaryButton: {
      border: '2px solid white',
      background: 'transparent',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      backdropFilter: 'blur(4px)',
    },
    contactBar: {
      marginTop: '48px',
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      flexWrap: 'wrap',
    },
    contactBadge: {
      background: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(12px)',
      borderRadius: '9999px',
      padding: '12px 24px',
      color: 'white',
      fontSize: '14px',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
    },
    scrollWheel: {
      width: '24px',
      height: '40px',
      border: '2px solid white',
      borderRadius: '9999px',
      display: 'flex',
      justifyContent: 'center',
    },
    scrollDot: {
      width: '4px',
      height: '12px',
      background: 'white',
      borderRadius: '9999px',
      marginTop: '8px',
      animation: 'pulse 2s infinite',
    },
    
    // Stats Section
    statsSection: {
      background: 'linear-gradient(135deg, #111827, #1f2937)',
      padding: '64px 0',
    },
    statsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
    },
    statCard: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: 'white',
    },
    statLabel: {
      color: '#d1d5db',
      fontSize: '14px',
    },
    
    // Courses Section
    coursesSection: {
      padding: '80px 0',
      background: '#f9fafb',
    },
    coursesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '48px',
    },
    sectionTitle: {
      fontSize: 'clamp(32px, 6vw, 48px)',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#6b7280',
      maxWidth: '576px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    titleUnderline: {
      width: '96px',
      height: '4px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      margin: '16px auto 0',
      borderRadius: '9999px',
    },
    loadingSpinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 0',
    },
    spinner: {
      width: '64px',
      height: '64px',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #9333ea',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    emptyState: {
      textAlign: 'center',
      padding: '80px 0',
    },
    emptyEmoji: {
      fontSize: '64px',
      marginBottom: '16px',
    },
    emptyTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#374151',
    },
    emptyText: {
      color: '#6b7280',
    },
    viewAllButton: {
      textAlign: 'center',
      marginTop: '48px',
    },
    viewAllLink: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '12px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    
    // Why Choose Us Section
    whySection: {
      padding: '80px 0',
      background: 'white',
    },
    whyContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
      marginTop: '48px',
    },
    whyCard: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    whyIcon: {
      width: '80px',
      height: '80px',
      background: '#fce7f3',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: '32px',
      transition: 'all 0.3s ease',
    },
    whyTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#1f2937',
    },
    whyText: {
      color: '#6b7280',
      lineHeight: '1.6',
    },
    
    // CTA Section
    ctaSection: {
      background: 'linear-gradient(135deg, #ec4899, #9333ea, #6366f1)',
      padding: '80px 0',
    },
    ctaContainer: {
      maxWidth: '768px',
      margin: '0 auto',
      padding: '0 24px',
      textAlign: 'center',
      color: 'white',
    },
    ctaTitle: {
      fontSize: 'clamp(32px, 6vw, 48px)',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    ctaText: {
      fontSize: '20px',
      marginBottom: '32px',
      opacity: 0.9,
    },
    ctaButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaPrimaryButton: {
      background: 'white',
      color: '#9333ea',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    },
    ctaSecondaryButton: {
      border: '2px solid white',
      background: 'transparent',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    },
    ctaPhone: {
      marginTop: '32px',
      fontSize: '14px',
      opacity: 0.8,
    },
  };

  // Hover effects (using state for simplicity)
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredWhy, setHoveredWhy] = useState(null);

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
        `}
      </style>

      {/* Hero Section */}
      <div style={styles.heroContainer}>
        {/* Optimized responsive image */}
       <img
  src={heroImage}
  alt="Nexus Modeling School Hero"
  style={styles.heroImage}
  onError={(e) => {
    e.target.onerror = null;
    e.target.style.display = "none";
    e.target.parentElement.style.background = `linear-gradient(
      135deg,
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.5)
    ), url(${heroImage}) center/cover`;
  }}
/>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.logoBadge}>
            <div style={styles.logoBadgeInner}>
              <span style={styles.logoText}>👣 Nexus Modeling School</span>
            </div>
          </div>
          
          <h1 style={styles.mainTitle}>
            Walk with Confidence,
            <br />
            <span style={styles.gradientText}>Shine with Nexus</span>
          </h1>
          
          <p style={styles.subtitle}>
            Ethiopia's Premier Modeling & Management School — Where Dreams Meet the Runway
          </p>
          
          <div style={styles.buttonGroup}>
            <a href="/courses" style={styles.primaryButton}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Explore Programs ✨
            </a>
            <a href="/register" style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              Start Your Journey 👣
            </a>
          </div>
          
          <div style={styles.contactBar}>
            <div style={styles.contactBadge}>
              📞 +251 940 848 080
            </div>
          </div>
        </div>
        
        <div style={styles.scrollIndicator}>
          <div style={styles.scrollWheel}>
            <div style={styles.scrollDot}></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statsGrid}>
            {[
              { key: 'students', label: 'Active Students', value: stats.students },
              { key: 'graduates', label: 'Successful Graduates', value: stats.graduates },
              { key: 'experts', label: 'Industry Experts', value: stats.experts },
              { key: 'workshops', label: 'Workshops Conducted', value: stats.workshops }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  ...styles.statCard,
                  transform: hoveredStat === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}>
                <div style={styles.statNumber}>{stat.value}+</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div style={styles.coursesSection}>
        <div style={styles.coursesContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Signature Programs</h2>
            <p style={styles.sectionSubtitle}>
              Professional training designed to launch your modeling career
            </p>
            <div style={styles.titleUnderline}></div>
          </div>
          
          {loading ? (
            <div style={styles.loadingSpinner}>
              <div style={styles.spinner}></div>
            </div>
          ) : (
            <>
              <div style={styles.coursesGrid}>
                {courses.slice(0, 6).map(course => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
              
              {courses.length === 0 && (
                <div style={styles.emptyState}>
                  <div style={styles.emptyEmoji}>🎯</div>
                  <h3 style={styles.emptyTitle}>Programs Coming Soon</h3>
                  <p style={styles.emptyText}>Stay tuned for our exciting course lineup!</p>
                </div>
              )}
            </>
          )}
          
          {!loading && courses.length > 0 && (
            <div style={styles.viewAllButton}>
              <a 
                href="/courses" 
                style={styles.viewAllLink}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                View All Programs →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={styles.whySection}>
        <div style={styles.whyContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={{
              ...styles.sectionTitle,
              background: 'linear-gradient(135deg, #1f2937, #4b5563)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Why Choose Nexus?</h2>
            <p style={styles.sectionSubtitle}>The leading modeling school in Ethiopia</p>
            <div style={styles.titleUnderline}></div>
          </div>
          
          <div style={styles.whyGrid}>
            {[
              { icon: '👑', title: 'Industry Experts', text: 'Learn from top models and industry professionals' },
              { icon: '🎯', title: 'Practical Training', text: 'Real runway experience and portfolio development' },
              { icon: '🌍', title: 'Global Opportunities', text: 'International connections and placement assistance' }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  ...styles.whyCard,
                  transform: hoveredWhy === index ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredWhy === index ? '0 20px 30px -10px rgba(0,0,0,0.15)' : 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={() => setHoveredWhy(index)}
                onMouseLeave={() => setHoveredWhy(null)}>
                <div style={{
                  ...styles.whyIcon,
                  background: hoveredWhy === index ? '#fbcfe8' : '#fce7f3',
                }}>{item.icon}</div>
                <h3 style={styles.whyTitle}>{item.title}</h3>
                <p style={styles.whyText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p style={styles.ctaText}>Join Nexus today and transform your passion into a profession</p>
          <div style={styles.ctaButtons}>
            <a 
              href="/register" 
              style={styles.ctaPrimaryButton}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Register Now 👣
            </a>
            <a 
              href="/contact" 
              style={styles.ctaSecondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#9333ea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}>
              Contact Us 📞
            </a>
          </div>
          <p style={styles.ctaPhone}>📞 Call us: +251 940 848 080</p>
        </div>
      </div>
    </>
  );
};

export default Home; 