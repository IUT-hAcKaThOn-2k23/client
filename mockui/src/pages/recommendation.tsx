import type { NextPage } from 'next';
import NavBar from 'src/home/navbar';
import Text from 'src/home/recommendationLayoutHeaderText';
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

const Recommendation: NextPage = () => {
  return (
    <>
      <TabTitle />

      <Main>
        <NavBar />
        <hr />
        {/* <AboutPage /> */}
        <Text />
        {/* <Hero />
        <Features /> */}
      </Main>
    </>
  );
};

export default Recommendation;
