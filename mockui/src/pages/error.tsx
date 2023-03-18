/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

// import Link from 'next/link';

const Error404: NextPage = () => {
  return (
    <main
      style={{
        display: 'grid',
        minHeight: '100vh',
        placeItems: 'center',
        backgroundColor: 'white',
        paddingTop: '6rem',
        paddingLeft: '1.5rem',
        paddingRight: '2rem',
        paddingBottom: '8rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img
          src="/error.gif"
          alt="errorImage"
          style={{ objectFit: 'cover', height: '50%', width: '70%' }}
        />
        <br />
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#4f46e5',
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          404
        </p>
        <h1
          style={{
            marginTop: '1rem',
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: '#1f2937',
          }}
          className="animate-pulse"
        >
          Page not found !
        </h1>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', lineHeight: '1.5', color: '#4b5563' }}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <a href="/">
            <button
              style={{
                borderRadius: '9999px',
                backgroundColor: 'black',
                padding: '0.625rem 1.5rem',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                fontWeight: 'medium',
                lineHeight: '1.5',
                color: '#f9fafb',
                boxShadow: '0px 4px 9px -4px #332d2d',
                transition: 'all 150ms ease-in-out',
              }}
            >
              Go Back Home
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Error404;
