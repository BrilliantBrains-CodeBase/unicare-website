import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 700, color: '#0b6ba8', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '1rem 0 0.5rem' }}>Page not found</h2>
      <p style={{ color: '#6b7280', maxWidth: '360px', margin: '0 0 2rem' }}>
        The page <code style={{ background: '#f3f4f6', padding: '2px 6px', borderRadius: 4 }}>{pathname}</code> doesn't exist.
      </p>
      <Link
        to="/"
        style={{ background: '#0b6ba8', color: '#fff', padding: '0.625rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}
      >
        Back to Home
      </Link>
    </div>
  );
}
