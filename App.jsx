import React from 'react';

export default function App() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
      color: 'gold',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'red' }}>The Karma Code</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>7 Laws of Personal Change</h2>
      <p style={{ maxWidth: '600px', lineHeight: '1.5', color: 'white' }}>
        Live your code. Transform your life. The Karma Code is a framework for clarity,
        discipline, and personal growth. This is your path to strength, resilience,
        and unshakable peace of mind.
      </p>
      <a href="https://thekarmacode-48.lovable.app" target="_blank" rel="noopener noreferrer"
        style={{ marginTop: '2rem', padding: '1rem 2rem', border: '2px solid gold', color: 'gold',
                 textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px',
                 transition: 'all 0.3s ease' }}
        onMouseOver={(e)=>{e.target.style.backgroundColor='gold';e.target.style.color='black';}}
        onMouseOut={(e)=>{e.target.style.backgroundColor='';e.target.style.color='gold';}}>
        Learn More
      </a>
    </div>
  );
}
