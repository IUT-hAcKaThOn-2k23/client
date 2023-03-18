import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1rem;
  text-align: center;
  row-gap: 50px;

  h2 {
    color: #6c63ff;
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 0.8em;
    color: #2d2d2d;
  }

  & > div {
    flex: 1 1 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 50px;
    margin-top: 50px;
  }
`;

const Features: NextPage = () => {
  return (
    <>
      <h1
        style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px', fontSize: '30px' }}
      >
        Our Services
      </h1>
      <FeatureContainer>
        <div>
          <Image src="/home/no-account.png" alt="No account" height="50px" width="50px" />
          <h2>Login/Register</h2>
          <p>
            Secured Login/Registration platform. We provide OTP-Verfication to make your profile and
            credentials more secure.
          </p>
        </div>
        <div>
          <Image src="/home/timer.png" alt="No account" height="50px" width="50px" />

          <h2>Build Faster</h2>
          <p>
            With the powerful editor and wide range of professional/job ready templates, you can
            build your resume quickly.
          </p>
        </div>
        <div>
          <Image src="/home/resume.png" alt="No account" height="50px" width="50px" />
          <h2>Fit for your needs</h2>
          <p>
            If you are a developer or teacher or a job seeker, customize the template which suits
            your data and passion.
          </p>
        </div>
      </FeatureContainer>
    </>
  );
};

export default Features;
