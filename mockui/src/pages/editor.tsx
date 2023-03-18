import type { NextPage } from 'next';
import { LeftNav } from 'src/core/containers/LeftNav';
import { Resume } from 'src/core/containers/Resume';
import { Sidebar } from 'src/core/containers/Sidebar';
import { FlexHC } from 'src/styles/styles';
import TabTitle from './tabTitle';

const Editor: NextPage = () => {
  return (
    <FlexHC>
      <TabTitle />

      <LeftNav />
      <Resume />
      <Sidebar />
    </FlexHC>
  );
};

export default Editor;
