import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    // Handle profile image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const containerStyle = {
        display: 'flex',
        height: '40rem',
        width: '50rem',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#f8fafc',
        marginTop: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        overflow: 'hidden'
    };
    
    const leftStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
        width: '40%',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
    };
    
    const rightStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        padding: '2rem'
    };

    const inputStyle = {
        height: '2.5rem',
        width: '90%',
        border: 'none',
        borderBottom: '2px solid #94a3b8',
        outline: 'none',
        transition: 'border-color 0.3s',
        fontSize: '1rem',
        color: '#374151',
        padding: '0.5rem 0',
        backgroundColor: 'transparent',
        marginBottom: '1rem'
    };

    const passwordContainerStyle = { position: 'relative', width: '90%' };

    const passwordInputStyle = { ...inputStyle, width: '100%' };

    const eyeIconStyle = {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#64748b'
    };

    const buttonStyle = {
        backgroundColor: '#ea580c',
        padding: '0.75rem',
        width: '90%',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        marginTop: '1rem'
    };

    const profileContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem'
    };

    const profileImageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '0.5rem',
        border: '2px solid #3b82f6'
    };

    return (
        <div style={containerStyle}>
            <div style={leftStyle}>
                <p style={{ fontWeight: '700', fontSize: '32px', marginBottom: '10px', color: 'white' }}>Register</p>
            </div>
            <div style={rightStyle}>
                
                {/* Profile Picture Upload */}
                <div style={profileContainerStyle}>
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" style={profileImageStyle} />
                    ) : (
                        <div style={{ ...profileImageStyle, backgroundColor: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', color: '#64748b' }}>
                            No Image
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                <input style={inputStyle} type="text" name="name" placeholder="Enter Your Full Name" />
                <input style={inputStyle} type="email" name="email" placeholder="Enter Your Email Address" />
                
                <div style={passwordContainerStyle}>
                    <input style={passwordInputStyle} type={passwordVisible ? "text" : "password"} name="password" placeholder="Create New Password" />
                    {passwordVisible ? <FaEyeSlash style={eyeIconStyle} onClick={togglePasswordVisibility} /> : <FaEye style={eyeIconStyle} onClick={togglePasswordVisibility} />}
                </div>

                <div style={passwordContainerStyle}>
                    <input style={passwordInputStyle} type={confirmPasswordVisible ? "text" : "password"} name="confirmPassword" placeholder="Re-Enter New Password" />
                    {confirmPasswordVisible ? <FaEyeSlash style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility} /> : <FaEye style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility} />}
                </div>

                <button style={buttonStyle}>Register</button>

                <Link to="/login">
                    <button style={buttonStyle}>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
