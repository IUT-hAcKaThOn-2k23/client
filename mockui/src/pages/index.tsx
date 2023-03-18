import type { NextPage } from 'next';
import Features from 'src/home/features';
import Hero from 'src/home/hero';
import NavBar from 'src/home/navbar';
import styled from 'styled-components';
import TabTitle from './tabTitle';

const Main = styled.main`
  padding: 10px 5% 0;
  margin: auto;
  max-width: 1200px;

  & > div {
    margin-bottom: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <TabTitle />

      <Main>
        <NavBar />
        <hr />
        <Hero />
        <Features />
      </Main>
    </>
  );
};

export default Home;
