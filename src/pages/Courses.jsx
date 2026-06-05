import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Course data based on modeling specializations
  const coursesData = {
    'High Fashion': {
      title: 'High Fashion & Editorial Model',
      duration: '6-10 Months',
      price: '₿ 48,000',
      icon: '👗',
      color: '#ec4899',
      features: [
        'Editorial Posing Techniques',
        'High Fashion Runway Walk',
        'Magazine & Campaign Prep',
        'Facial Expression Mastery',
        'Agency Portfolio Development',
        'International Standards Training',
        'Luxury Brand Etiquette',
        'Certificate of Excellence'
      ],
      schedule: '3-4 days per week',
      level: 'Advanced',
      demand: '🔥 High Demand'
    },
    'Runway/Catwalk': {
      title: 'Runway & Catwalk Model',
      duration: '4-8 Months',
      price: '₿ 35,000',
      icon: '👠',
      color: '#f59e0b',
      features: [
        'Professional Catwalk Techniques',
        'Fashion Show Choreography',
        'Ramp Presence & Confidence',
        'Turn & Pose Mastery',
        'Designer Collaboration Skills',
        'Live Event Performance',
        'Showreel Production',
        'Certificate & Showreel'
      ],
      schedule: '3 days per week',
      level: 'Intermediate-Advanced',
      demand: '🔥 Very High Demand'
    },
    'Commercial': {
      title: 'Commercial Model',
      duration: '3-6 Months',
      price: '₿ 28,000',
      icon: '📺',
      color: '#3b82f6',
      features: [
        'Commercial Print & Video',
        'TV Commercial Techniques',
        'Product Endorsement Skills',
        'Lifestyle & Casual Posing',
        'Voice & On-Camera Presence',
        'Brand Representation',
        'Casting & Audition Prep',
        'Industry Certificate'
      ],
      schedule: '2-3 days per week',
      level: 'Beginner-Intermediate',
      demand: '🔥 High Demand'
    },
    'Photo Model': {
      title: 'Photo Model',
      duration: '3-6 Months',
      price: '₿ 25,000',
      icon: '📸',
      color: '#8b5cf6',
      features: [
        'Studio & Outdoor Photography',
        'Facial Expressions & Emotion',
        'Body Angles & Posing Flow',
        'Lighting Awareness',
        'Collaboration with Photographers',
        'Portfolio Building Sessions',
        'Image Selection & Editing Basics',
        'Professional Portfolio'
      ],
      schedule: '2-3 days per week',
      level: 'Beginner-Intermediate',
      demand: '🔥 Very High Demand'
    },
    'Fitness': {
      title: 'Fitness Model',
      duration: '4-8 Months',
      price: '₿ 32,000',
      icon: '💪',
      color: '#10b981',
      features: [
        'Athletic Posing Techniques',
        'Nutrition & Wellness Coaching',
        'Sports Brand Photography',
        'Muscle Definition Presentation',
        'Activewear Campaign Skills',
        'Fitness Video Content',
        'Supplement & Brand Deals Prep',
        'Fitness Certificate'
      ],
      schedule: '3 days per week',
      level: 'Intermediate',
      demand: '🔥 Rising Demand'
    },
    'Plus Size & Curve': {
      title: 'Plus Size & Curve Model',
      duration: '4-8 Months',
      price: '₿ 30,000',
      icon: '👑',
      color: '#ef4444',
      features: [
        'Curve Modeling Confidence',
        'Inclusive Fashion Techniques',
        'Body Positivity Empowerment',
        'Editorial & Commercial Curve Work',
        'Runway for Curve Models',
        'Portfolio for Plus Market',
        'Brand Diversity Representation',
        'Certificate & Portfolio'
      ],
      schedule: '2-3 days per week',
      level: 'Beginner-Intermediate',
      demand: '🔥 High Demand'
    },
    'Parts Model': {
      title: 'Parts Model (Hands/Feet/Legs)',
      duration: '2-4 Months',
      price: '₿ 18,000',
      icon: '🖐️',
      color: '#a855f7',
      features: [
        'Hand & Foot Positioning',
        'Jewelry & Product Showcase',
        'Close-up Photography Skills',
        'Nail & Skin Care for Modeling',
        'Shoe & Accessory Campaigns',
        'Commercial Parts Booking Prep',
        'Niche Market Training',
        'Specialized Certificate'
      ],
      schedule: '2 days per week',
      level: 'Beginner',
      demand: '🔥 Niche Demand'
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
      gap: '12px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    filterButton: {
      padding: '10px 24px',
      border: '2px solid #e5e7eb',
      background: 'white',
      borderRadius: '40px',
      fontSize: '14px',
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
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
    },
    cardPrice: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#ec4899',
      marginBottom: '4px',
    },
    priceNote: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    demandBadge: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginTop: '8px',
    },
    featuresSection: {
      padding: '0 30px 20px 30px',
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
      fontSize: '14px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginTop: '10px',
      padding: '20px 30px',
      background: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
      borderBottom: '1px solid #e5e7eb',
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
    specializationSection: {
      marginTop: '60px',
      padding: '40px',
      background: 'linear-gradient(135deg, #fef2f8, #f3e8ff)',
      borderRadius: '24px',
    },
    specializationTitle: {
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
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
    },
    th: {
      padding: '15px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#1f2937',
      borderBottom: '2px solid #e5e7eb',
      background: '#f8fafc',
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
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const getCoursesByCategory = () => {
    if (selectedCategory === 'all') {
      return Object.entries(coursesData);
    }
    return Object.entries(coursesData).filter(([key]) => key === selectedCategory);
  };

  const categories = ['all', 'High Fashion', 'Runway/Catwalk', 'Commercial', 'Photo Model', 'Fitness', 'Plus Size & Curve', 'Parts Model'];

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
        <h1 style={styles.title}>Modeling Specializations</h1>
        <p style={styles.subtitle}>
          Find your niche in the modeling industry with our specialized training programs
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterSection}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              ...styles.filterButton,
              background: selectedCategory === category 
                ? 'linear-gradient(135deg, #ec4899, #9333ea)' 
                : 'white',
              color: selectedCategory === category ? 'white' : '#374151',
              borderColor: selectedCategory === category ? 'transparent' : '#e5e7eb',
              transform: hoveredFilter === category ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredFilter(category)}
            onMouseLeave={() => setHoveredFilter(null)}>
            {category === 'all' ? 'All Specializations' : category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="courses-grid" style={styles.coursesGrid}>
        {getCoursesByCategory().map(([title, course], index) => (
          <div
            key={title}
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
              <div style={{
                ...styles.demandBadge,
                background: `${course.color}15`,
                color: course.color,
              }}>
                {course.demand}
              </div>
            </div>

            {/* Features */}
            <div style={styles.featuresSection}>
              <div style={styles.featuresTitle}>✨ What You'll Learn:</div>
              <ul style={styles.featuresList}>
                {course.features.slice(0, 7).map((feature, idx) => (
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
                <div style={styles.infoLabel}>Experience Level</div>
                <div style={styles.infoValue}>{course.level}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Certificate</div>
                <div style={styles.infoValue}>✓ Included</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Portfolio</div>
                <div style={styles.infoValue}>✓ Professional</div>
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

      {/* Specialization Comparison Section */}
      {/* <div style={styles.specializationSection}>
        <h2 style={styles.specializationTitle}>Which Modeling Path Is Right For You?</h2>
        <div style={styles.comparisonTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Specialization</th>
                <th style={styles.th}>Best For</th>
                <th style={styles.th}>Duration</th>
                <th style={styles.th}>Investment</th>
                <th style={styles.th}>Demand</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(coursesData).map(([title, course]) => (
                <tr key={title}>
                  <td style={styles.td}><strong>{title}</strong></td>
                  <td style={styles.td}>{course.features[0]?.split(' ').slice(0, 3).join(' ') || 'Professional Modeling'}</td>
                  <td style={styles.td}>{course.duration}</td>
                  <td style={styles.td}>{course.price}</td>
                  <td style={styles.td}>{course.demand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Industry Insights */}
      <div style={{
        marginTop: '40px',
        padding: '30px',
        background: '#f0fdf4',
        borderRadius: '24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>💡</div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginBottom: '12px' }}>
          Industry Insights
        </h3>
        <p style={{ color: '#14532d', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          The modeling industry is diversifying rapidly! Brands are actively seeking High Fashion, 
          Commercial, Curve, and Parts models. Our specialized training prepares you for real-world 
          bookings and agency representation.
        </p>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Find Your Modeling Niche?</h2>
        <p style={styles.ctaText}>
          Limited seats available for each specialization. Apply now to start your modeling journey!
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
          📞 For questions about our specializations, call us: <strong style={{ color: '#ec4899' }}>+251 940 848 080</strong>
        </p>
        <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '8px' }}>
          Flexible payment plans available | Scholarships for exceptional talent | Free career consultation
        </p>
      </div>
    </div>
  );
};

export default Courses;