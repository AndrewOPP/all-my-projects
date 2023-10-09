import { StyledButton, StyledDiv, StyledInput } from './FindFilter.styled';
import { UilSearch } from '@iconscout/react-unicons';
export function FindFilter() {
  return (
    <StyledDiv>
      <UilSearch />
      <StyledInput placeholder="Search Projects" type="text" />
      <StyledButton>Create</StyledButton>
    </StyledDiv>
  );
}
