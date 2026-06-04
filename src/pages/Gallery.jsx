import { useEffect, useState } from 'react';
import { getGallery } from '../services/api';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    getGallery()
      .then((res) => setGallery(res.data))
      .catch((err) => console.error('Error loading gallery:', err))
      .finally(() => setLoading(false));
  }, []);

  // Sample gallery data if API returns empty
  const sampleGallery = [
    { id: 1, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b', title: 'Runway Training', category: 'training' },
    { id: 2, image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c71fe', title: 'Fashion Show 2023', category: 'event' },
    { id: 3, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9', title: 'Graduation Ceremony', category: 'graduation' },
    { id: 4, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb', title: 'Professional Photo Shoot', category: 'photoshoot' },
    { id: 5, image: 'https://images.unsplash.com/photo-1503185912284-5271ff81aae4', title: 'Model Workshop', category: 'workshop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9', title: 'Fitness Training', category: 'training' },
    { id: 7, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', title: 'Portfolio Session', category: 'photoshoot' },
    { id: 8, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce', title: 'Fashion Week', category: 'event' },
    { id: 9, image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc', title: 'Award Ceremony', category: 'graduation' },
  ];

  const displayGallery = gallery.length > 0 ? gallery : sampleGallery;

  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'training', label: 'Training', icon: '💪' },
    { id: 'event', label: 'Events', icon: '🎉' },
    { id: 'photoshoot', label: 'Photo Shoots', icon: '📷' },
    { id: 'graduation', label: 'Graduation', icon: '🎓' },
    { id: 'workshop', label: 'Workshops', icon: '💡' },
  ];

  const filteredGallery = filter === 'all' 
    ? displayGallery 
    : displayGallery.filter(item => item.category === filter);

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
    statsBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '30px',
      flexWrap: 'wrap',
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ec4899',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
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
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      marginBottom: '60px',
    },
    galleryCard: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      aspectRatio: '4/3',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      padding: '20px',
      transform: 'translateY(100%)',
      transition: 'transform 0.3s ease',
    },
    cardTitle: {
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    cardCategory: {
      color: '#ec4899',
      fontSize: '12px',
      fontWeight: '600',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.95)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.3s ease-out',
    },
    modalContent: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      position: 'relative',
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '90vh',
      borderRadius: '12px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    },
    modalClose: {
      position: 'absolute',
      top: '-40px',
      right: '0',
      background: 'white',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    modalTitle: {
      position: 'absolute',
      bottom: '-40px',
      left: '0',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
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
    emptyState: {
      textAlign: 'center',
      padding: '80px 20px',
    },
    emptyIcon: {
      fontSize: '64px',
      marginBottom: '20px',
    },
    emptyTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: '10px',
    },
    emptyText: {
      color: '#6b7280',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '40px',
      background: 'linear-gradient(135deg, #ec4899, #9333ea)',
      borderRadius: '24px',
      color: 'white',
    },
    ctaTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    ctaButton: {
      background: 'white',
      color: '#ec4899',
      padding: '12px 32px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '16px',
    },
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
          
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .gallery-card:hover img {
            transform: scale(1.1);
          }
          
          .gallery-card:hover .overlay {
            transform: translateY(0);
          }
          
          @media (max-width: 768px) {
            .gallery-grid {
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            }
          }
        `}
      </style>

      <div style={styles.header}>
        <div style={styles.logoIcon}>👣</div>
        <h1 style={styles.title}>Our Gallery</h1>
        <p style={styles.subtitle}>
          Explore moments from our modeling classes, fashion shows, and student achievements
        </p>
        
        <div style={styles.statsBar}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>{displayGallery.length}+</div>
            <div style={styles.statLabel}>Moments Captured</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Events Covered</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>1000+</div>
            <div style={styles.statLabel}>Happy Students</div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div style={styles.filterSection}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            style={{
              ...styles.filterButton,
              background: filter === cat.id 
                ? 'linear-gradient(135deg, #ec4899, #9333ea)' 
                : 'white',
              color: filter === cat.id ? 'white' : '#374151',
              borderColor: filter === cat.id ? 'transparent' : '#e5e7eb',
              transform: hoveredCard === cat.id ? 'translateY(-2px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredCard(cat.id)}
            onMouseLeave={() => setHoveredCard(null)}>
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
        </div>
      ) : (
        <>
          {filteredGallery.length > 0 ? (
            <div className="gallery-grid" style={styles.galleryGrid}>
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id || item._id}
                  className="gallery-card"
                  style={styles.galleryCard}
                  onClick={() => setSelectedImage(item)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}>
                  <img
                    src={item.image?.startsWith('http') ? item.image : `http://localhost:5000${item.image}`}
                    alt={item.title}
                    style={styles.galleryImage}
                  />
                  <div className="overlay" style={styles.overlay}>
                    <div style={styles.cardTitle}>{item.title}</div>
                    <div style={styles.cardCategory}>
                      {item.category || 'Modeling'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📸</div>
              <h3 style={styles.emptyTitle}>No images found</h3>
              <p style={styles.emptyText}>Try a different filter category</p>
            </div>
          )}
        </>
      )}

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Want to be Featured in Our Gallery?</h2>
        <p style={{ opacity: 0.95 }}>
          Join Nexus Modeling School and start your journey to become a professional model
        </p>
        <button
          onClick={() => window.location.href = '/register'}
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          Join Now 👣
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
          📸 Follow us on social media for more updates | 📞 <strong style={{ color: '#ec4899' }}>+251 940 848 080</strong>
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.modalClose}
              onClick={() => setSelectedImage(null)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              ✕
            </button>
            <img
              src={selectedImage.image?.startsWith('http') ? selectedImage.image : `http://localhost:5000${selectedImage.image}`}
              alt={selectedImage.title}
              style={styles.modalImage}
            />
            <div style={styles.modalTitle}>{selectedImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;