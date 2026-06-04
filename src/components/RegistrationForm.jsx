import { useState } from 'react';
import { registerStudent } from '../services/api';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    weight: '',
    height: '',
    sex: '',
    phone: '',
    idNumber: '',
    talent: '',
    language: '',
    course: '',
    courseDuration: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: '15px',
    backgroundColor: focusedField ? '#f8fafc' : '#fff',
    transform: 'scale(1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    background: loading 
      ? 'linear-gradient(135deg, #94a3b8, #64748b)'
      : 'linear-gradient(135deg, #ec4899, #9333ea)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: loading ? 'scale(0.98)' : 'scale(1)',
    boxShadow: loading 
      ? 'none'
      : '0 4px 15px rgba(236, 72, 153, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '40px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeInUp 0.6s ease-out',
  };

  const fileInputStyle = {
    ...inputStyle,
    padding: '12px 20px',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: profileImage ? '#f0fdf4' : '#fff',
    borderColor: profileImage ? '#22c55e' : '#e2e8f0',
  };

  const successMessageStyle = {
    textAlign: 'center',
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '12px',
    color: '#16a34a',
    fontWeight: 'bold',
    animation: 'slideDown 0.5s ease-out',
  };

  const errorMessageStyle = {
    textAlign: 'center',
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '12px',
    color: '#dc2626',
    fontWeight: 'bold',
    animation: 'shake 0.5s ease-out',
  };

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '0',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('age', formData.age);
    data.append('weight', formData.weight);
    data.append('height', formData.height);
    data.append('sex', formData.sex);
    data.append('phone', formData.phone);
    data.append('idNumber', formData.idNumber);
    data.append('talent', formData.talent);
    data.append('language', formData.language);
    data.append('course', formData.course);
    data.append('courseDuration', formData.courseDuration);

    if (profileImage) {
      data.append('profileImage', profileImage);
    }

    try {
      setLoading(true);
      await registerStudent(data);

      setMessage({
        type: 'success',
        text: 'Registration Successful! 🎉 We will contact you soon.',
      });

      setFormData({
        fullName: '',
        age: '',
        weight: '',
        height: '',
        sex: '',
        phone: '',
        idNumber: '',
        talent: '',
        language: '',
        course: '',
        courseDuration: '',
      });

      setProfileImage(null);
      
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);
    } catch (error) {
      setMessage({
        type: 'error',
        text:
          error.response?.data?.message ||
          'Registration failed. Please try again.',
      });
      
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          input:hover, select:hover, textarea:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          
          input:focus, select:focus, textarea:focus {
            border-color: #ec4899;
            box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
            transform: scale(1.01);
          }
          
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
          }
          
          button:active {
            transform: translateY(0);
          }
          
          button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }
          
          button:active::before {
            width: 300px;
            height: 300px;
          }
          
          input[type="file"]:hover {
            transform: translateY(-2px);
            border-color: #ec4899;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @media (max-width: 640px) {
            .row-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ fontSize: '48px' }}>👣</span>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ec4899, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Join Nexus Modeling School
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Start your journey to become a professional model
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name 👤"
          required
          value={formData.fullName}
          onChange={(e) => handleInputChange(e, 'fullName')}
          onFocus={() => handleFocus('fullName')}
          onBlur={handleBlur}
          style={inputStyle}
        />

        {/* Row 1: Age, Weight, Height */}
        <div className="row-grid" style={rowStyle}>
          <input
            type="number"
            placeholder="Age 📅"
            required
            value={formData.age}
            onChange={(e) => handleInputChange(e, 'age')}
            onFocus={() => handleFocus('age')}
            onBlur={handleBlur}
            style={inputStyle}
            min="15"
            max="60"
          />
          
          <input
            type="number"
            placeholder="Weight (kg) ⚖️"
            required
            value={formData.weight}
            onChange={(e) => handleInputChange(e, 'weight')}
            onFocus={() => handleFocus('weight')}
            onBlur={handleBlur}
            style={inputStyle}
            step="0.1"
          />
          
          <input
            type="number"
            placeholder="Height (cm) 📏"
            required
            value={formData.height}
            onChange={(e) => handleInputChange(e, 'height')}
            onFocus={() => handleFocus('height')}
            onBlur={handleBlur}
            style={inputStyle}
            step="0.1"
          />
        </div>

        {/* Row 2: Sex, Phone */}
        <div className="row-grid" style={rowStyle}>
          <select
            required
            value={formData.sex}
            onChange={(e) => handleInputChange(e, 'sex')}
            onFocus={() => handleFocus('sex')}
            onBlur={handleBlur}
            style={inputStyle}
          >
            <option value="">Select Gender ⚥</option>
            <option value="Female">Female 👩</option>
            <option value="Male">Male 👨</option>
            <option value="Other">Other 🌈</option>
          </select>
          
          <input
            type="tel"
            placeholder="Phone Number 📱"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
            onFocus={() => handleFocus('phone')}
            onBlur={handleBlur}
            style={inputStyle}
          />
        </div>

        {/* ID Number */}
        <input
          type="text"
          placeholder="ID Number (Passport/National ID) 🆔"
          required
          value={formData.idNumber}
          onChange={(e) => handleInputChange(e, 'idNumber')}
          onFocus={() => handleFocus('idNumber')}
          onBlur={handleBlur}
          style={inputStyle}
        />

        {/* Row 3: Talent, Language */}
        <div className="row-grid" style={rowStyle}>
          <select
            required
            value={formData.talent}
            onChange={(e) => handleInputChange(e, 'talent')}
            onFocus={() => handleFocus('talent')}
            onBlur={handleBlur}
            style={inputStyle}
          >
            <option value="">Select Your Talent ⭐</option>
            <option value="Catwalk">Catwalk/Runway 👠</option>
            <option value="Photography">Photography Pose 📸</option>
            <option value="Acting">Acting 🎭</option>
            <option value="Dancing">Dancing 💃</option>
            <option value="Singing">Singing 🎤</option>
            <option value="Fitness">Fitness 💪</option>
            <option value="None">None - Willing to Learn 🌱</option>
          </select>
          
          <select
            required
            value={formData.language}
            onChange={(e) => handleInputChange(e, 'language')}
            onFocus={() => handleFocus('language')}
            onBlur={handleBlur}
            style={inputStyle}
          >
            <option value="">Select Language 🗣️</option>
            <option value="Amharic">Amharic 🇪🇹</option>
            <option value="English">English 🇬🇧</option>
            <option value="Oromo">Oromo 🗣️</option>
            <option value="Tigrigna">Tigrigna 🗣️</option>
            <option value="Both Amharic & English">Both Amharic & English</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Course Selection */}
        <select
          required
          value={formData.course}
          onChange={(e) => handleInputChange(e, 'course')}
          onFocus={() => handleFocus('course')}
          onBlur={handleBlur}
          style={inputStyle}
        >
          <option value="">Select Modeling Course 📚</option>
          <option value="Professional Modeling">✨ Professional Modeling</option>
          <option value="Fashion Runway">👠 Fashion Runway</option>
          <option value="Photo Posing">📸 Photo Posing & Portfolio</option>
          <option value="Personality Development">💫 Personality Development</option>
          <option value="Grooming & Etiquette">👔 Grooming & Etiquette</option>
          <option value="Fitness & Wellness">💪 Fitness & Wellness for Models</option>
        </select>

        {/* Course Duration */}
        <select
          required
          value={formData.courseDuration}
          onChange={(e) => handleInputChange(e, 'courseDuration')}
          onFocus={() => handleFocus('courseDuration')}
          onBlur={handleBlur}
          style={inputStyle}
        >
          <option value="">Select Course Duration ⏰</option>
          <option value="3 Months">📘 3 Months Course - Basic Modeling</option>
          <option value="6 Months">📗 6 Months Course - Professional Track</option>
          <option value="10 Months">📕 10 Months Course - Master Program</option>
        </select>

        {/* Profile Image */}
        <div style={{ position: 'relative', marginBottom: '15px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            style={fileInputStyle}
          />
          {profileImage && (
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '20px',
                animation: 'pulse 0.5s ease-out',
              }}
            >
              ✅
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading} 
          style={buttonStyle}
        >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                border: '2px solid white',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}></span>
              Submitting Application...
            </span>
          ) : (
            '✨ Submit Application ✨'
          )}
        </button>

        {/* Message Display */}
        {message.text && (
          <div style={message.type === 'success' ? successMessageStyle : errorMessageStyle}>
            {message.text}
          </div>
        )}
      </form>
      
      {/* Footer Info */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#64748b',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span>📞 +251 940 848 080</span>
          <span>📸 Profile Photo Required</span>
          <span>🎓 Limited Seats Available</span>
        </div>
        <p style={{ marginTop: '10px' }}>
          ⚡ Join Nexus Modeling School - Where Dreams Meet the Runway
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;