import React, { useState } from 'react';
import heroImage from '../assets/about.JPG';
import tadeImage from '../assets/herr.JPG';
import hibistImage from '../assets/hibist.JPG';

const About = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 24px',
      animation: 'fadeIn 0.6s ease-out',
    },
    welcomeBanner: {
      background: 'linear-gradient(135deg, #ec4899, #9333ea, #6366f1)',
      borderRadius: '24px',
      padding: '30px',
      marginBottom: '40px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    },
    welcomeTitle: {
      fontSize: 'clamp(28px, 6vw, 42px)',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    welcomeText: {
      fontSize: 'clamp(14px, 3vw, 16px)',
      lineHeight: '1.6',
      marginBottom: '20px',
      opacity: 0.95,
    },
    ownerBadge: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.2)',
      padding: '8px 20px',
      borderRadius: '40px',
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '10px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    },
    infoCard: {
      background: 'rgba(255,255,255,0.15)',
      borderRadius: '16px',
      padding: '15px',
      backdropFilter: 'blur(10px)',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    socialLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.2)',
      padding: '8px 16px',
      borderRadius: '40px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    logoIcon: {
      fontSize: '64px',
      marginBottom: '20px',
      animation: 'bounce 2s ease-in-out infinite',
    },
    title: {
      fontSize: 'clamp(36px, 8vw, 56px)',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #ec4899, #9333ea, #6366f1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: 'clamp(18px, 4vw, 22px)',
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    missionSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    missionCard: {
      textAlign: 'center',
      padding: '30px',
      background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    missionIcon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
    missionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#1f2937',
    },
    missionText: {
      color: '#6b7280',
      lineHeight: '1.6',
    },
    servicesSection: {
      marginBottom: '60px',
      padding: '40px',
      background: '#f8fafc',
      borderRadius: '30px',
    },
    servicesTitle: {
      fontSize: 'clamp(28px, 5vw, 36px)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#1f2937',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    serviceCard: {
      textAlign: 'center',
      padding: '20px',
      background: 'white',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    serviceIcon: {
      fontSize: '36px',
      marginBottom: '10px',
    },
    serviceTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1f2937',
    },
    storySection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '50px',
      marginBottom: '60px',
      alignItems: 'center',
    },
    storyContent: {
      padding: '20px',
    },
    storyTitle: {
      fontSize: 'clamp(28px, 5vw, 36px)',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#1f2937',
    },
    storyText: {
      color: '#6b7280',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '16px',
    },
    storyImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
      padding: '40px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      borderRadius: '30px',
    },
    statCard: {
      textAlign: 'center',
      padding: '20px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: 'clamp(32px, 6vw, 48px)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '16px',
      color: 'rgba(255,255,255,0.9)',
    },
    teamSection: {
      marginBottom: '60px',
    },
    teamTitle: {
      fontSize: 'clamp(28px, 5vw, 36px)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#1f2937',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
    },
    teamCard: {
      textAlign: 'center',
      padding: '20px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    teamImage: {
      width: '180px',
      height: '290px',
      borderRadius: '50%',
      margin: '0 auto 20px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    teamPhoto: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    teamName: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#1f2937',
    },
    teamRole: {
      fontSize: '14px',
      color: '#ec4899',
      fontWeight: '600',
      marginBottom: '10px',
    },
    experienceBadge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    profileSection: {
      textAlign: 'left',
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid #f3f4f6',
      maxHeight: '450px',
      overflowY: 'auto',
    },
    profileTitle: {
      fontSize: '13px',
      fontWeight: 'bold',
      color: '#ec4899',
      marginBottom: '8px',
      marginTop: '12px',
    },
    profileText: {
      fontSize: '12px',
      color: '#6b7280',
      lineHeight: '1.5',
      marginBottom: '6px',
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '8px',
      marginBottom: '8px',
    },
    skillTag: {
      background: '#f3e8ff',
      color: '#9333ea',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: '600',
    },
    valuesSection: {
      marginBottom: '60px',
      padding: '40px',
      background: '#f8fafc',
      borderRadius: '30px',
    },
    valuesTitle: {
      fontSize: 'clamp(28px, 5vw, 36px)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px',
      color: '#1f2937',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    valueCard: {
      textAlign: 'center',
      padding: '20px',
      background: 'white',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
    },
    valueIcon: {
      fontSize: '40px',
      marginBottom: '15px',
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#1f2937',
    },
    valueText: {
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: '1.6',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '50px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      borderRadius: '30px',
      color: 'white',
    },
    ctaTitle: {
      fontSize: 'clamp(24px, 5vw, 32px)',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    ctaText: {
      fontSize: '18px',
      marginBottom: '30px',
      opacity: 0.95,
    },
    ctaButton: {
      display: 'inline-block',
      background: 'white',
      color: '#ec4899',
      padding: '14px 32px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    contactInfo: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '20px',
      background: '#f1f5f9',
      borderRadius: '16px',
    },
    contactText: {
      fontSize: '16px',
      color: '#1f2937',
      fontWeight: '500',
    },
    contactNumber: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ec4899',
      marginTop: '10px',
    },
  };

  // Hover states
  const [hoveredMission, setHoveredMission] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialMedia = [
    { name: 'Instagram', handle: '@Official_Tade_12', url: 'https://www.instagram.com/official_tade_12', icon: '📷' },
    { name: 'TikTok', handle: '@Official_Model_12', url: 'https://www.tiktok.com/@official_model_12', icon: '🎵' },
    { name: 'Facebook', handle: 'Official_Tadele Balcha', url: 'https://www.facebook.com/share/p/1CVDiqPCVW/', icon: '📘' },
    { name: 'YouTube', handle: '@nexus_modeling', url: 'https://youtube.com/@nexus_modeling', icon: '📺' },
  ];

  const services = [
    { icon: '📚', title: 'Modeling Course' },
    { icon: '🎬', title: 'Casting' },
    { icon: '🎉', title: 'Event' },
    { icon: '🎨', title: 'Art Management' },
    { icon: '🎥', title: 'Production' },
  ];

  // Team members with complete profile data
  const teamMembers = [
    { 
      name: 'TADELE BALCHA WOLDE', 
      role: 'Model | Founder & CEO | Pageant Judge', 
      photo: tadeImage,
      icon: '👑', 
      desc: 'Professional Model with 8+ years of international experience. Specializes in high fashion and commercial modeling.',
      specialties: ['Runway', 'Editorial', 'Brand Endorsements'],
      experience: '8+ Years',
      profile: {
        personalInfo: {
          'Full Name': 'Tadele Balcha Wolde',
          'Age': '28',
          'Nationality': 'Ethiopian',
          'Languages': 'Amharic, English',
          'Height': '188 cm',
          'Weight': '75 kg',
          'Measurements': 'Chest: 98cm, Waist: 78cm, Hips: 98cm'
        },
        intro: 'Professional international model with extensive experience in high fashion and commercial modeling. Founder and CEO of Nexus Modeling School, dedicated to transforming Ethiopia\'s fashion industry and creating world-class talent.',
        experience: [
          'International Runway Model - Milan Fashion Week 2022-2024',
          'Brand Ambassador for multiple international luxury brands',
          'Featured in top fashion magazines including Vogue Italia and Harper\'s Bazaar',
          '8+ years of professional modeling experience across 12 countries',
          'Walked for renowned designers including Armani, Versace, and Gucci',
          'Commercial campaigns for global brands in Dubai, Paris, and New York'
        ],
        pageantJudgment: [
          'Miss Ethiopia 2023 - Head Judge',
          'Ethiopia Next Top Model Season 4 - Panel Judge',
          'International Model Search Competition 2024 - Lead Judge',
          'African Fashion Week Model Competition - Chief Judge',
          'Nexus Model Star Search - Creator & Head Judge'
        ],
        campaigns: [
          'Luxury Fashion Campaign - Paris Fashion Week 2024',
          'Commercial Campaign - Dubai Shopping Festival 2023',
          'Editorial Shoots - Vogue Italia November 2023',
          'Brand Endorsements - Multiple International Fashion Brands',
          'Lookbook - Spring/Summer Collection 2024',
          'Fitness Campaign - International Sportswear Brand'
        ],
        entrepreneurship: 'Founded Nexus Modeling School in 2018 with just 15 students. Under his leadership, the school has grown to over 500 successful graduates, established partnerships with international modeling agencies, and created Ethiopia\'s first professional modeling certification program.',
        skills: ['Runway Walking', 'Editorial Posing', 'Commercial Modeling', 'Brand Representation', 'Public Speaking', 'Fashion Direction', 'Talent Scouting', 'Portfolio Development'],
        location: 'Addis Ababa, Ethiopia & International'
      }
    },
    { 
      name: 'Coach Hibist', 
      role: 'Head Trainer & Runway Coach', 
      photo: hibistImage,
      icon: '👩‍🎨', 
      desc: 'Former international runway model with 10+ years of experience. Trained over 300 successful models.',
      specialties: ['Catwalk', 'Posture', 'Stage Presence'],
      experience: '10+ Years',
      profile: {
        personalInfo: {
          'Full Name': 'Hibist (Last Name)',
          'Age': '35',
          'Nationality': 'Ethiopian',
          'Languages': 'Amharic, English, French',
          'Height': '178 cm',
          'Weight': '62 kg',
          'Measurements': 'Chest: 86cm, Waist: 64cm, Hips: 90cm'
        },
        intro: 'Former international runway model with a decade of experience walking for top designers across Europe, Asia, and Africa. Passionate about nurturing new talent and helping aspiring models achieve their dreams through proper technique and confidence building.',
        experience: [
          'Former Model - Paris Fashion Week (2014-2022)',
          'Runway Coach for 10+ years across 3 continents',
          'Trained over 300 successful models, 50+ now working internationally',
          'International modeling competition winner - Paris 2015',
          'Worked with top photographers and designers globally',
          'Featured in campaigns for L\'Oréal and Dior'
        ],
        pageantJudgment: [
          'Ethiopia Model Search 2023 - Head Judge',
          'African Fashion Week 2024 - Panel Judge',
          'Model Talent Competition Ethiopia - Lead Coach & Judge',
          'Nexus Annual Model Showcase - Chief Judge',
          'East Africa Model Competition - Guest Judge'
        ],
        campaigns: [
          'High Fashion Campaign - Paris Fashion Week Collections',
          'Beauty Campaign - L\'Oréal Paris 2022-2024',
          'Luxury Brand - Dior Beauty Ambassador',
          'Fashion Week Runway Shows - Paris, Milan, London',
          'Bridal Collection - International Wedding Magazine',
          'Lingerie Campaign - Global Brand Launch'
        ],
        entrepreneurship: 'Senior coach at Nexus Modeling School since 2019, developing the comprehensive curriculum and training program that has become the gold standard for modeling education in Ethiopia.',
        skills: ['Catwalk Technique', 'Posture Correction', 'Stage Presence', 'Confidence Building', 'Portfolio Development', 'Fashion Styling', 'Etiquette Training', 'Photo Posing'],
        location: 'Addis Ababa, Ethiopia'
      }
    }
  ];

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
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .story-content {
            animation: slideInLeft 0.6s ease-out;
          }
          
          .story-image {
            animation: slideInRight 0.6s ease-out;
          }
          
          @media (max-width: 768px) {
            .story-section {
              grid-template-columns: 1fr !important;
            }
          }
          
          .profile-section::-webkit-scrollbar {
            width: 4px;
          }
          
          .profile-section::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .profile-section::-webkit-scrollbar-thumb {
            background: #ec4899;
            border-radius: 10px;
          }
        `}
      </style>

      {/* Welcome Banner */}
      <div style={styles.welcomeBanner}>
        <h1 style={styles.welcomeTitle}>✨ Welcome to Nexus Modeling School & Management ✨</h1>
        <p style={styles.welcomeText}>
          This is a Modeling School & Modeling Agency Based in Ethiopia. 
          We specialize in professional modeling training, talent casting, event management, 
          art management, and production services.
        </p>
        <div style={styles.ownerBadge}>
          👑 Founder & CEO: Professional Model <strong>Tadele Balcha Wolde</strong> 👑
        </div>
        
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            📍 <strong>Location</strong><br />
            Ayat, Addis Ababa, Ethiopia
          </div>
          <div style={styles.infoCard}>
            ✉️ <strong>Email</strong><br />
            tademan562@gmail.com
          </div>
        </div>

        {/* Social Media Links */}
        <div style={styles.socialLinks}>
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.socialLink,
                transform: hoveredSocial === index ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                background: hoveredSocial === index ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)',
              }}
              onMouseEnter={() => setHoveredSocial(index)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <span>{social.icon}</span>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div style={styles.servicesSection}>
        <h2 style={styles.servicesTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                transform: hoveredService === index ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredService === index ? '0 10px 25px rgba(0,0,0,0.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div style={styles.serviceIcon}>{service.icon}</div>
              <div style={styles.serviceTitle}>{service.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.logoIcon}>👣</div>
        <h1 style={styles.title}>Nexus Modeling School & Management</h1>
        <p style={styles.subtitle}>
          Ethiopia's premier institution for professional modeling education, 
          empowering dreams and shaping the future of fashion since 2018
        </p>
      </div>

      {/* Mission, Vision, Values Section */}
      <div style={styles.missionSection}>
        {[
          { icon: '🎯', title: 'Our Mission', text: 'To empower aspiring models with professional skills, confidence, and industry connections needed to succeed in the competitive world of fashion and entertainment.' },
          { icon: '👁️', title: 'Our Vision', text: 'To become Ethiopia\'s leading modeling institution, recognized internationally for producing world-class talent and revolutionizing the fashion industry.' },
          { icon: '💎', title: 'Our Values', text: 'Excellence, Diversity, Professionalism, Integrity, and Innovation - shaping the next generation of modeling talent.' }
        ].map((item, index) => (
          <div 
            key={index}
            style={{
              ...styles.missionCard,
              transform: hoveredMission === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hoveredMission === index ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={() => setHoveredMission(index)}
            onMouseLeave={() => setHoveredMission(null)}>
            <div style={styles.missionIcon}>{item.icon}</div>
            <h3 style={styles.missionTitle}>{item.title}</h3>
            <p style={styles.missionText}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Our Story Section */}
      <div className="story-section" style={styles.storySection}>
        <div className="story-content" style={styles.storyContent}>
          <h2 style={styles.storyTitle}>Our Story</h2>
          <p style={styles.storyText}>
            Founded in 2018 by Professional Model <strong>Tadele Balcha Wolde</strong>, Nexus Modeling School & Management started with a simple yet powerful vision - 
            to transform Ethiopia's modeling industry and create world-class talent that can compete globally.
          </p>
          <p style={styles.storyText}>
            What began as a small training program with just 15 students has now grown into Ethiopia's 
            premier modeling institution, with over 500 successful graduates working in fashion shows, 
            advertising campaigns, and entertainment industries both locally and internationally.
          </p>
          <p style={styles.storyText}>
            At Nexus, we don't just teach modeling - we build confidence, nurture talent, and create 
            opportunities. Our comprehensive approach combines technical skills, personality development, 
            portfolio building, and industry networking to ensure our students are fully prepared for 
            successful modeling careers.
          </p>
        </div>
        <div className="story-image">
          <img 
            src={heroImage}
            alt="Nexus Modeling School"
            style={styles.storyImage}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div style={styles.statsSection}>
        {[
          { number: '500+', label: 'Graduates' },
          { number: '24', label: 'Expert Trainers' },
          { number: '156+', label: 'Workshops' },
          { number: '98%', label: 'Success Rate' }
        ].map((stat, index) => (
          <div 
            key={index}
            style={{
              ...styles.statCard,
              transform: hoveredStat === index ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
            }}
            onMouseEnter={() => setHoveredStat(index)}
            onMouseLeave={() => setHoveredStat(null)}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Our Team Section - With Complete Profile Data */}
      <div style={styles.teamSection}>
        <h2 style={styles.teamTitle}>Meet Our Expert Coaches</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              style={{
                ...styles.teamCard,
                transform: hoveredTeam === index ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredTeam === index ? '0 15px 35px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.08)',
              }}
              onMouseEnter={() => setHoveredTeam(index)}
              onMouseLeave={() => setHoveredTeam(null)}>
              <div style={styles.teamImage}>
                <img src={member.photo} alt={member.name} style={styles.teamPhoto} />
              </div>
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              
              {/* Experience Badge */}
              <div style={styles.experienceBadge}>
                ⭐ {member.experience} Experience
              </div>
              
              <div className="profile-section" style={styles.profileSection}>
                {/* Personal Info - Now safe because profile exists */}
                {member.profile.personalInfo && (
                  <>
                    <div style={styles.profileTitle}>📋 PERSONAL INFORMATION</div>
                    {Object.entries(member.profile.personalInfo).map(([key, value]) => (
                      <p key={key} style={styles.profileText}><strong>{key}:</strong> {value}</p>
                    ))}
                  </>
                )}
                
                {/* Intro Section */}
                <p style={styles.profileText}>{member.profile.intro}</p>
                
                {/* Experience Section */}
                <div style={styles.profileTitle}>🏆 EXPERIENCE & ACHIEVEMENTS</div>
                {member.profile.experience.map((exp, i) => (
                  <p key={i} style={styles.profileText}>• {exp}</p>
                ))}
                
                {/* Pageant Judgment - Only for Tadele */}
                {member.profile.pageantJudgment && member.profile.pageantJudgment.length > 0 && (
                  <>
                    <div style={styles.profileTitle}>👑 PAGEANT JUDGE</div>
                    {member.profile.pageantJudgment.map((judgment, i) => (
                      <p key={i} style={styles.profileText}>• {judgment}</p>
                    ))}
                  </>
                )}
                
                {/* Campaigns Section */}
                <div style={styles.profileTitle}>📺 CAMPAIGNS & BRAND WORK</div>
                {member.profile.campaigns.map((camp, i) => (
                  <p key={i} style={styles.profileText}>• {camp}</p>
                ))}
                
                {/* Entrepreneurship Section */}
                <div style={styles.profileTitle}>💎 ENTREPRENEURSHIP</div>
                <p style={styles.profileText}>{member.profile.entrepreneurship}</p>
                
                {/* Skills Section */}
                <div style={styles.profileTitle}>🎯 SKILLS</div>
                <div style={styles.skillsList}>
                  {member.profile.skills.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
                
                {/* Location */}
                <div style={styles.profileTitle}>📍 LOCATION</div>
                <p style={styles.profileText}>{member.profile.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values Section */}
      <div style={styles.valuesSection}>
        <h2 style={styles.valuesTitle}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {[
            { icon: '⭐', title: 'Excellence', text: 'Striving for the highest standards in every aspect of training' },
            { icon: '🤝', title: 'Diversity', text: 'Celebrating unique beauty and talents from all backgrounds' },
            { icon: '💼', title: 'Professionalism', text: 'Maintaining industry standards and ethical practices' },
            { icon: '🔗', title: 'Integrity', text: 'Building trust through honest and transparent practices' },
            { icon: '💡', title: 'Innovation', text: 'Embracing new trends and technologies in modeling' }
          ].map((value, index) => (
            <div 
              key={index}
              style={{
                ...styles.valueCard,
                transform: hoveredValue === index ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredValue === index ? '0 10px 25px rgba(0,0,0,0.1)' : 'none',
              }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}>
              <div style={styles.valueIcon}>{value.icon}</div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueText}>{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Start Your Modeling Journey?</h2>
        <p style={styles.ctaText}>
          Join Nexus Modeling School and transform your passion into a profession
        </p>
        <a 
          href="/register" 
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          Enroll Now 👣
        </a>
      </div>

      {/* Contact Information */}
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>📞 For inquiries and admissions</p>
        <p style={styles.contactNumber}>+251940848080</p>
        <p style={{ ...styles.contactText, marginTop: '10px', fontSize: '14px' }}>
          📍 Ayat, Addis Ababa, Ethiopia | ✉️ tademan562@gmail.com
        </p>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#6b7280' }}>
          📷 Instagram: @Official_Tade_12 | 🎵 TikTok: @Official_Model_12 | 📘 Facebook: Official_Tadele Balcha
        </p>
      </div>
    </div>
  );
};

export default About;