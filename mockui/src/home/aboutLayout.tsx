import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div
      className="about-section"
      style={{
        padding: '50px',
        textAlign: 'center',
        // backgroundColor: '',
        color: 'white',
      }}
    >
      <h1>Our Team </h1>
      {/* <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p> */}
    </div>
  );
};

const TeamMember: React.FC<{
  name: string;
  role: string;
  description: string;
  email: string;
}> = ({ name, role, description, email }) => {
  return (
    <div
      className="column"
      style={{
        float: 'left',
        width: '33.3%',
        marginBottom: '16px',
        padding: '0 8px',
      }}
    >
      <div
        className="card"
        style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', margin: '8px', height: '200%' }}
      >
        <img src="/profile.png" alt={name} style={{ width: '100%' }} />
        <div className="container" style={{ padding: '0 16px', textAlign: 'center' }}>
          <h2>{name}</h2>
          <p className="title" style={{ color: 'grey' }}>
            {role}
          </p>
          <p>{description}</p>
          <p>{email}</p>
          <p>
            <button
              className="button"
              style={{
                border: 'none',
                outline: '0',
                display: 'inline-block',
                padding: '8px',
                color: 'white',
                backgroundColor: '#000',
                textAlign: 'center',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Contact
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <>
      {/* <h2 style={{ textAlign: 'center' }}>Our Team</h2> */}
      <div className="row">
        <TeamMember
          name="Sakib Esrat"
          role="CEO & Founder"
          description="Hey there! Hope you are well."
          email="sakibesrat@iut-dhaka.edu"
        />
        <TeamMember
          name="Salman Ahsan"
          role="Finance Director"
          description="Welcome to our platform."
          email="salman@iut-dhaka.edu"
        />
        <TeamMember
          name="Tanmoy Ahsan"
          role="Marketing Head"
          description="Hope we maintain our friendship in the ling run!"
          email="ahsanhabib@iut-dhaka.edu"
        />
        <TeamMember
          name="Md Muktadir"
          role="Staff Manager"
          description="We are ready to help you."
          email="muktadir@iut-dhaka.edu"
        />
      </div>
    </>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutSection />
      <Team />
    </>
  );
};

export default AboutPage;
