import {
  ImgDiv,
  ProfileDiv,
  ProfileText,
  ProfileTextProject,
  ProjectsUl,
  ProjectsUlItem,
  StyledAside,
} from './Menu.styled';
import {
  UilBrowser,
  UilDesktopCloudAlt,
  UilFileCheck,
  UilApps,
} from '@iconscout/react-unicons';

export function Menu({ onKeyFromMenu, currentCategory }) {
  return (
    <StyledAside>
      <ProfileDiv>
        <ImgDiv>
          {/* <img src="" alt="av" /> */}
          <ProfileText>Andrew Vyblov</ProfileText>
        </ImgDiv>

        <ProfileTextProject>Projects collection</ProfileTextProject>
      </ProfileDiv>

      <ProjectsUl>
        <ProjectsUlItem
          active={currentCategory === 'All projects'}
          onClick={() => onKeyFromMenu('All projects')}
        >
          <UilBrowser />
          All projects
        </ProjectsUlItem>
        <ProjectsUlItem
          active={currentCategory === 'Full Projects'}
          onClick={() => onKeyFromMenu('Full Projects')}
        >
          <UilFileCheck />
          Full projects
        </ProjectsUlItem>
        <ProjectsUlItem
          active={currentCategory === 'Mini-Projects'}
          onClick={() => onKeyFromMenu('Mini-Projects')}
        >
          <UilApps />
          Mini-projects
        </ProjectsUlItem>
        <ProjectsUlItem
          active={currentCategory === 'Solo Components'}
          onClick={() => onKeyFromMenu('Solo Components')}
        >
          <UilDesktopCloudAlt />
          Solo components
        </ProjectsUlItem>
      </ProjectsUl>
    </StyledAside>
  );
}
