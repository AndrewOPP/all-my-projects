import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledFormButton,
  StyledFormCloseButton,
  StyledFormDivTech,
  StyledFormHeader,
  StyledFormInput,
  StyledFormInputDiv,
  StyledFormLabel,
  StyledFormTechInput,
  StyledFormTechP,
  StyledInput,
} from './FindFilter.styled';
import { UilSearch, UilTimes } from '@iconscout/react-unicons';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    backgroundColor: `white`,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    height: '680px',
    width: '550px',
  },
  overlay: {
    zIndex: 1000,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');
export function FindFilter({ onAddProject }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function hundlerSubmit(e) {
    const { technologies } = e.currentTarget.elements;
    e.preventDefault();
    toggle();
    const addedProject = {
      id: nanoid(),
      title: e.currentTarget.elements[1].value,
      category: e.currentTarget.elements[4].checked
        ? 'Mini-Projects'
        : 'Full Projects',
      gitHub: e.currentTarget.elements[2].value,
      livePage: e.currentTarget.elements[3].value,
      keyWords: [...technologies]
        .filter(elem => elem.checked)
        .map(elem => elem.id),
    };
    onAddProject(addedProject);
  }

  return (
    <StyledDiv>
      <UilSearch />
      <StyledInput placeholder="Search Projects" type="text" />
      <StyledButton onClick={() => toggle()}>Create</StyledButton>
      <Modal style={customStyles} isOpen={isOpen}>
        <StyledForm onSubmit={event => hundlerSubmit(event)}>
          <StyledFormCloseButton onClick={() => toggle()}>
            <UilTimes />
          </StyledFormCloseButton>

          <StyledFormHeader>Add new project</StyledFormHeader>
          <StyledFormInputDiv>
            <StyledFormLabel name="ProjectName">Project Title:</StyledFormLabel>
            <StyledFormInput type="text" placeholder="Write title here" />
          </StyledFormInputDiv>
          <StyledFormInputDiv>
            <StyledFormLabel name="GitHub">GitHub Page:</StyledFormLabel>
            <StyledFormInput type="text" placeholder="Write link here" />
          </StyledFormInputDiv>
          <StyledFormInputDiv>
            <StyledFormLabel name="Live">Live Page:</StyledFormLabel>
            <StyledFormInput type="text" placeholder="Write link here" />
          </StyledFormInputDiv>
          <StyledFormDivTech>
            <StyledFormLabel>Project type:</StyledFormLabel>
            <StyledFormTechInput
              name="radio"
              type="radio"
            ></StyledFormTechInput>
            <StyledFormTechP> Mini-project</StyledFormTechP>
            <StyledFormTechInput
              name="radio"
              type="radio"
            ></StyledFormTechInput>
            <StyledFormTechP> Full project</StyledFormTechP>
          </StyledFormDivTech>
          <StyledFormDivTech>
            <StyledFormLabel name="technologies">Technologies:</StyledFormLabel>
            <StyledFormDivTech>
              <StyledFormTechInput
                id="HTML"
                label={'html'}
                name="technologies"
                type="checkbox"
              />{' '}
              <StyledFormTechP htmlFor="HTML">HTML</StyledFormTechP>
            </StyledFormDivTech>
            <StyledFormDivTech>
              <StyledFormTechInput
                id="CSS"
                name="technologies"
                type="checkbox"
              />{' '}
              <StyledFormTechP htmlFor="CSS">CSS</StyledFormTechP>
            </StyledFormDivTech>
            <StyledFormDivTech>
              <StyledFormTechInput
                id="JS"
                name="technologies"
                type="checkbox"
              />
              <StyledFormTechP htmlFor="JS">JS</StyledFormTechP>
            </StyledFormDivTech>
            <StyledFormDivTech>
              <StyledFormTechInput
                id="React"
                name="technologies"
                type="checkbox"
              />
              <StyledFormTechP htmlFor="React">React</StyledFormTechP>
            </StyledFormDivTech>
          </StyledFormDivTech>

          <StyledFormButton type="submit">Create</StyledFormButton>
        </StyledForm>
      </Modal>
    </StyledDiv>
  );
}
