import { nanoid } from 'nanoid';
import {
  StyledA,
  StyledCategory,
  StyledDiv,
  StyledKeysLi,
  StyledKeysUl,
  StyledLi,
  StyledParag,
  StyledTitle,
} from './projectListItem.styled';

export const ProjectListItem = ({ arr }) => {
  return arr.map(({ title, id, category, gitHub, livePage, keyWords }) => {
    return (
      <StyledLi key={id}>
        <StyledDiv>
          <StyledCategory>{category}</StyledCategory>
          <StyledTitle>{title}</StyledTitle>
          <StyledParag>
            Github: <StyledA href={gitHub}>Click here</StyledA>
          </StyledParag>
          <StyledParag>
            Live Page: <StyledA href={livePage}>Click here</StyledA>
          </StyledParag>
          <div>
            <StyledParag>Technologies:</StyledParag>
            <StyledKeysUl>
              {keyWords.map(elem => (
                <StyledKeysLi key={nanoid()}>{elem}</StyledKeysLi>
              ))}
            </StyledKeysUl>
          </div>
        </StyledDiv>
      </StyledLi>
    );
  });
};
