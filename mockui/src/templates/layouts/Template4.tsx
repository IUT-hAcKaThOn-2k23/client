import {
  useActivities,
  useEducation,
  useIntro,
  useLabels,
  useSkills,
  useWork,
} from 'src/stores/data.store';
import { getIcon } from 'src/styles/icons';
import { Flex, FlexCol } from 'src/styles/styles';
import { Description } from 'src/templates/components/description/Description';
import { EduSection } from 'src/templates/components/education/EduSection';
import { Exp } from 'src/templates/components/exp/Exp';
import { Intro } from 'src/templates/components/intro/Intro';
import {
  ModernHeader,
  ModernHeaderIntro,
} from 'src/templates/components/section-layout/ModernHeader';
import { RatedBars } from 'src/templates/components/skills/RatedBars';
import { UnratedTabs } from 'src/templates/components/skills/UnratedTabs';
import styled from 'styled-components';
import shallow from 'zustand/shallow';
// import shallow from 'zustand/shallow';
// import {
//   useIntro,
//   useWork,
//   useSkills,
//   useAchievements,
//   useEducation,
// } from 'stores/data.store';

export function Template4() {
  // Uncomment below lines to access data

  // const intro = useIntro((state: any) => state.intro);
  // const education = useEducation((state: any) => state.education);
  // const experience = useWork((state: any) => state);
  // const [keyProjects, certificates] = useAchievements(
  //   (state: any) => [state.keyProjects, state.certificates],
  //   shallow
  // );
  // const [languages, frameworks, libraries, databases, technologies, practices, tools] = useSkills(
  //   (state: any) => [
  //     state.languages,
  //     state.frameworks,
  //     state.libraries,
  //     state.databases,
  //     state.technologies,
  //     state.practices,
  //     state.tools,
  //   ],
  //   shallow
  // );

  return <h1>Template4: Sandeep Balachandran</h1>;
}

const ResumeContainer = styled(Flex)`
  height: 100%;
  padding: 10px 25px;
  column-gap: 10px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};

  @media print {
    border: none;
  }
`;

const LeftSection = styled(FlexCol)`
  flex-basis: 66%;
  row-gap: 20px;
  height: 400%;
`;

const RightSection = styled(FlexCol)`
  flex-basis: 34%;
  row-gap: 20px;
  height: 400%;
  justify-content: space-between;
`;

const labelsIcon = [
  'key',
  'work',
  'certificate',
  'identity',
  'career',
  'expert',
  'skill',

  'education',
  'branch',
  'tool',
];

export default function ProfessionalTemplate() {
  const intro = useIntro((state: any) => state.intro);
  const education = useEducation((state: any) => state.education);
  const experience = useWork((state: any) => state);
  const [involvements, achievements] = useActivities(
    (state: any) => [state.involvements, state.achievements],
    shallow
  );
  const [languages, frameworks, libraries, databases, technologies, practices, tools] = useSkills(
    (state: any) => [
      state.languages,
      state.frameworks,
      state.libraries,
      state.databases,
      state.technologies,
      state.practices,
      state.tools,
    ],
    shallow
  );
  const labels = useLabels((state: any) => state.labels);

  const leftSections = [
    {
      title: labels[3],
      icon: labelsIcon[3],
      component: <Description description={intro.summary} />,
    },
    {
      title: labels[4],
      icon: labelsIcon[4],
      component: <Description description={intro.objective} />,
    },
    {
      title: labels[5],
      icon: labelsIcon[5],
      component: <RatedBars items={[...languages, ...frameworks]} />,
    },
    {
      title: labels[6],
      icon: labelsIcon[6],
      component: <UnratedTabs items={[...technologies, ...libraries, ...databases]} />,
    },
    {
      title: labels[7],
      icon: labelsIcon[7],
      component: <UnratedTabs items={practices} />,
    },
    { title: labels[8], icon: labelsIcon[8], component: <UnratedTabs items={tools} /> },
    {
      title: labels[9],
      icon: labelsIcon[9],
      component: <EduSection education={education} />,
    },
  ];

  const rightSections = [
    {
      title: labels[0],
      icon: labelsIcon[0],
      component: <Exp companies={experience.companies} />,
      styles: { flexGrow: 1 },
    },
    {
      title: labels[1],
      icon: labelsIcon[1],
      component: <Description description={involvements} />,
    },
    {
      title: labels[2],
      icon: labelsIcon[2],
      component: <Description description={achievements} />,
    },
  ];

  return (
    <ResumeContainer>
      <LeftSection>
        <ModernHeaderIntro title={intro.name} profiles={intro.profiles}>
          <Intro intro={intro} labels={labels} />
        </ModernHeaderIntro>

        {leftSections
          .filter(({ title }) => !!title)
          .map(({ title, icon, component, styles }) => (
            <ModernHeader icon={getIcon(icon)} title={title} styles={styles} key={title}>
              {component}
            </ModernHeader>
          ))}
      </LeftSection>

      <RightSection>
        {rightSections
          .filter(({ title }) => !!title)
          .map(({ title, icon, component }) => (
            <ModernHeader icon={getIcon(icon)} title={title} key={title}>
              {component}
            </ModernHeader>
          ))}
      </RightSection>
    </ResumeContainer>
  );
}
