import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('all');

  // Course data based on durations
  const coursesData = {
    '3 Months': {
      title: 'Basic Modeling Program',
      duration: '3 Months',
      price: '₿ 15,000',
      icon: '📘',
      color: '#10b981',
      features: [
        'Introduction to Modeling',
        'Basic Posing Techniques',
        'Catwalk Fundamentals',
        'Personal Grooming',
        'Photography Basics',
        'Certificate of Completion'
      ],
      schedule: '2 days per week',
      hours: '24 total hours',
      level: 'Beginner'
    },
    '6 Months': {
      title: 'Professional Modeling Track',
      duration: '6 Months',
      price: '₿ 28,000',
      icon: '📗',
      color: '#f59e0b',
      features: [
        'Advanced Runway Techniques',
        'Professional Photo Shoots',
        'Portfolio Development',
        'Fashion Industry Knowledge',
        'Personality Development',
        'Social Media Branding',
        'Industry Networking',
        'Certificate & Portfolio'
      ],
      schedule: '3 days per week',
      hours: '72 total hours',
      level: 'Intermediate'
    },
    '10 Months': {
      title: 'Master Modeling Program',
      duration: '10 Months',
      price: '₿ 45,000',
      icon: '📕',
      color: '#ec4899',
      features: [
        'Elite Runway Mastery',
        'International Standards',
        'Professional Portfolio Book',
        'Agency Representation Prep',
        'Fitness & Wellness Training',
        'Business & Branding',
        'International Exposure',
        'Graduation Fashion Show',
        'Lifetime Alumni Access',
        'Master Certificate'
      ],
      schedule: '4 days per week',
      hours: '160 total hours',
      level: 'Advanced'
    }
  };

  const styles = {
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '60px 24px',
      animation: 'fadeIn 0.6s ease-out',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    logoIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      animation: 'bounce 2s ease-in-out infinite',
    },
    title: {
      fontSize: 'clamp(32px, 6vw, 48px)',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '16px',
    },
    subtitle: {
      fontSize: 'clamp(16px, 4vw, 18px)',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    filterSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    filterButton: {
      padding: '12px 28px',
      border: '2px solid #e5e7eb',
      background: 'white',
      borderRadius: '40px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      marginBottom: '60px',
    },
    courseCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
    },
    cardHeader: {
      padding: '30px',
      textAlign: 'center',
      position: 'relative',
    },
    cardIcon: {
      fontSize: '64px',
      marginBottom: '16px',
    },
    cardDuration: {
      display: 'inline-block',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '16px',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
    },
    cardPrice: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#ec4899',
      marginBottom: '16px',
    },
    priceNote: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    featuresSection: {
      padding: '0 30px 30px 30px',
    },
    featuresTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#374151',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 0',
      fontSize: '14px',
      color: '#6b7280',
      borderBottom: '1px solid #f3f4f6',
    },
    featureIcon: {
      fontSize: '16px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginTop: '20px',
      padding: '20px 30px',
      background: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
    },
    infoItem: {
      textAlign: 'center',
    },
    infoLabel: {
      fontSize: '12px',
      color: '#9ca3af',
      marginBottom: '4px',
    },
    infoValue: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937',
    },
    buttonSection: {
      padding: '20px 30px 30px',
    },
    enrollButton: {
      width: '100%',
      padding: '14px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    comparisonSection: {
      marginTop: '60px',
      padding: '40px',
      background: '#f8fafc',
      borderRadius: '24px',
    },
    comparisonTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#1f2937',
    },
    comparisonTable: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '15px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#1f2937',
      borderBottom: '2px solid #e5e7eb',
    },
    td: {
      padding: '12px',
      textAlign: 'center',
      color: '#6b7280',
      borderBottom: '1px solid #e5e7eb',
    },
    ctaSection: {
      textAlign: 'center',
      marginTop: '60px',
      padding: '50px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      borderRadius: '24px',
      color: 'white',
    },
    ctaTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    ctaText: {
      fontSize: '16px',
      marginBottom: '24px',
      opacity: 0.95,
    },
    ctaButton: {
      background: 'white',
      color: '#ec4899',
      padding: '14px 32px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
    },
    spinner: {
      width: '64px',
      height: '64px',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #ec4899',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const getCoursesByDuration = () => {
    if (selectedDuration === 'all') {
      return Object.entries(coursesData);
    }
    return Object.entries(coursesData).filter(([key]) => key === selectedDuration);
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .course-card {
            animation: slideIn 0.5s ease-out;
          }
          
          @media (max-width: 768px) {
            .courses-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div style={styles.header}>
        <div style={styles.logoIcon}>👣</div>
        <h1 style={styles.title}>Our Modeling Programs</h1>
        <p style={styles.subtitle}>
          Choose the perfect program that fits your goals and schedule
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterSection}>
        {['all', '3 Months', '6 Months', '10 Months'].map((duration) => (
          <button
            key={duration}
            onClick={() => setSelectedDuration(duration)}
            style={{
              ...styles.filterButton,
              background: selectedDuration === duration 
                ? 'linear-gradient(135deg, #ec4899, #9333ea)' 
                : 'white',
              color: selectedDuration === duration ? 'white' : '#374151',
              borderColor: selectedDuration === duration ? 'transparent' : '#e5e7eb',
              transform: hoveredFilter === duration ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredFilter(duration)}
            onMouseLeave={() => setHoveredFilter(null)}>
            {duration === 'all' ? 'All Programs' : duration}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="courses-grid" style={styles.coursesGrid}>
        {getCoursesByDuration().map(([duration, course], index) => (
          <div
            key={duration}
            className="course-card"
            style={{
              ...styles.courseCard,
              transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
              boxShadow: hoveredCard === index 
                ? '0 20px 40px rgba(0,0,0,0.15)' 
                : '0 10px 30px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}>
            
            {/* Card Header */}
            <div style={{
              ...styles.cardHeader,
              background: `linear-gradient(135deg, ${course.color}15, ${course.color}05)`,
            }}>
              <div style={styles.cardIcon}>{course.icon}</div>
              <div style={{
                ...styles.cardDuration,
                background: `${course.color}20`,
                color: course.color,
              }}>
                {course.duration}
              </div>
              <h3 style={styles.cardTitle}>{course.title}</h3>
              <div style={styles.cardPrice}>
                {course.price}
                <div style={styles.priceNote}>Full Program Fee</div>
              </div>
            </div>

            {/* Features */}
            <div style={styles.featuresSection}>
              <div style={styles.featuresTitle}>✨ What You'll Learn:</div>
              <ul style={styles.featuresList}>
                {course.features.slice(0, 6).map((feature, idx) => (
                  <li key={idx} style={styles.featureItem}>
                    <span style={styles.featureIcon}>✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Grid */}
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Schedule</div>
                <div style={styles.infoValue}>{course.schedule}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Total Hours</div>
                <div style={styles.infoValue}>{course.hours}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Level</div>
                <div style={styles.infoValue}>{course.level}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Certificate</div>
                <div style={styles.infoValue}>✓ Included</div>
              </div>
            </div>

            {/* Enroll Button */}
            <div style={styles.buttonSection}>
              <button
                onClick={() => navigate('/register', { state: { selectedCourse: course.title, duration: course.duration } })}
                style={{
                  ...styles.enrollButton,
                  background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)`,
                  color: 'white',
                  transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Enroll Now → 
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div style={styles.comparisonSection}>
        <h2 style={styles.comparisonTitle}>Compare Programs</h2>
        <div style={styles.comparisonTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Features</th>
                <th style={styles.th}>3 Months</th>
                <th style={styles.th}>6 Months</th>
                <th style={styles.th}>10 Months</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Total Hours', values: ['24 hrs', '72 hrs', '160 hrs'] },
                { feature: 'Days/Week', values: ['2 days', '3 days', '4 days'] },
                { feature: 'Portfolio', values: ['Basic', 'Professional', 'Premium'] },
                { feature: 'Fashion Show', values: ['❌', '✓', '✓'] },
                { feature: 'Industry Networking', values: ['❌', '✓', '✓'] },
                { feature: 'Agency Prep', values: ['❌', 'Basic', 'Advanced'] },
                { feature: 'International Exposure', values: ['❌', '❌', '✓'] },
                { feature: 'Investment', values: ['₿15,000', '₿28,000', '₿45,000'] },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td style={styles.td}><strong>{row.feature}</strong></td>
                  {row.values.map((value, i) => (
                    <td key={i} style={styles.td}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Begin Your Journey?</h2>
        <p style={styles.ctaText}>
          Limited seats available for each program. Enroll now to secure your spot!
        </p>
        <button
          onClick={() => navigate('/register')}
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          Apply Now 👣
        </button>
      </div>

      {/* Contact Info */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        background: '#f9fafb',
        borderRadius: '16px',
      }}>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          📞 For questions about our programs, call us: <strong style={{ color: '#ec4899' }}>+251 940 848 080</strong>
        </p>
        <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
          Flexible payment plans available | Scholarships for exceptional talent
        </p>
      </div>
    </div>
  );
};

export default Courses;