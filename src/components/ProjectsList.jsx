import { ProjectListItem } from './ProjectListItem';
import {
  StyledCategoryDiv,
  StyledDiv,
  StyledTitle,
  StyledUl,
} from './ProjectsList.styled';

function renderRightUl(projects, filterWord) {
  const filteredArr = projects.filter(
    ({ category }) => category === filterWord
  );
  return <ProjectListItem arr={filteredArr} />;
}

export function ProjectsList({ filterWord, projects }) {
  if (filterWord === 'All projects') {
    return (
      <StyledDiv>
        <div>
          <StyledTitle>Full Projects</StyledTitle>
          <StyledUl>{renderRightUl(projects, 'Full Projects')}</StyledUl>
        </div>
        <div>
          <StyledTitle>Mini-Projects</StyledTitle>
          <StyledUl>{renderRightUl(projects, 'Mini-Projects')}</StyledUl>
        </div>
        <div>
          <StyledTitle>Solo Components</StyledTitle>
          <StyledUl>{renderRightUl(projects, 'Solo Components')}</StyledUl>
        </div>
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <StyledCategoryDiv>
          <StyledTitle>{filterWord}</StyledTitle>
          <StyledUl>{renderRightUl(projects, filterWord)}</StyledUl>
        </StyledCategoryDiv>
      </StyledDiv>
    );
  }
}
