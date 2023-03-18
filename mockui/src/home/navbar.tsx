import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getIcon } from 'src/styles/icons';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: absolute;
  width: 90%;

  @media (min-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  .nav-item {
    border-bottom: 1px solid #6c63ff;
  }

  .icon {
    font-size: 2.5rem;
  }
`;

const NavBar: NextPage = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="logo" height="50px" width="50px" />
        </a>
      </Link>
      <RightItemsContainer>
        <a className="nav-item show-web">Home</a>
        <a className="nav-item show-web">Recommendations</a>
        <a className="nav-item show-web">About</a>
        <a
          href="https://github.com/IUT-hAcKaThOn-2k23/client"
          className="icon"
          target="_new"
          title="Source code"
        >
          {getIcon('github')}
        </a>
      </RightItemsContainer>
    </Nav>
  );
};

export default NavBar;
