import { FC } from 'react';

interface Props {
  headerText: string;
}

const AuthenticationFormHeaderText: FC<Props> = ({ headerText }) => {
  return <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{headerText}</h1>;
};

export default AuthenticationFormHeaderText;
