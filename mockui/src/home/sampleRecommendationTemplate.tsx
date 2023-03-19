import type { NextPage } from 'next';
import Link from 'next/link';
import { RecommendUser } from 'src/core/widgets/RecommendUser';
import styled from 'styled-components';

interface TextProps {
  profession: string;
  buttonText: string;
  professionTextColor: String;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  text-align: center;
  position: relative;
  animation: jump 1s ease infinite;
  animation-direction: alternate;
  @keyframes jump {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }
`;

const Subtitle = styled.button`
  text-align: center;
  background-color: #add8e6;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

const SampleText: NextPage<TextProps> = ({ buttonText }) => {
  return (
    <>
      <Container>
        <Title style={{ color: 'White' }}>
          You might be a <RecommendUser />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src="/images/hi.gif" height="35%" width="35%" alt="" />
          <br />
        </Title>
      </Container>
      <Link href="/recommendation">
        <div style={{ textAlign: 'center' }}>
          <Subtitle>{buttonText} </Subtitle>
        </div>
      </Link>
    </>
  );
};

export default SampleText;