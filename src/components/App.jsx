import { Component } from 'react';
import { MainDiv, MainDivvv } from './App.styled';
import { FindFilter } from './FindFilter';
import { Menu } from './Menu';
import { ProjectsList } from './ProjectsList';

const projects = [
  {
    title: 'TastyTreats',
    category: 'Full Projects',
    gitHub: 'https://github.com/daniil0040/project-team-scriptores',
    livePage: 'https://daniil0040.github.io/project-team-scriptores/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-1',
  },
  {
    title: 'Simply Chocolate',
    category: 'Full Projects',
    gitHub: 'https://github.com/HaberSerhii/flexible-mindbreakers',
    livePage: 'https://haberserhii.github.io/flexible-mindbreakers/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-2',
  },
  {
    title: 'DrevoSnovsk',
    category: 'Full Projects',
    gitHub: 'https://github.com/AndrewOPP/DrevoSnovsk',
    livePage: 'https://andrewopp.github.io/DrevoSnovsk/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-3',
  },
  {
    title: 'WebStudio',
    category: 'Full Projects',
    gitHub: 'https://github.com/AndrewOPP/WebStudio',
    livePage: 'https://andrewopp.github.io/WebStudio/',
    keyWords: ['HTML', ' CSS'],
    id: 'id-4',
  },
  {
    title: 'GitHubApp',
    category: 'Mini-Projects',
    gitHub: 'https://github.com/AndrewOPP/gitHubApp',
    livePage: 'https://andrewopp.github.io/gitHubApp/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-5',
  },
  {
    title: 'HTML quiz',
    category: 'Mini-Projects',
    gitHub: 'https://github.com/AndrewOPP/quizApp',
    livePage: 'https://andrewopp.github.io/quizApp/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-6',
  },
  {
    title: 'ImageFinder',
    category: 'Mini-Projects',
    gitHub: 'https://github.com/AndrewOPP/ImageFinder',
    livePage: 'https://andrewopp.github.io/ImageFinder/',
    keyWords: ['HTML', ' CSS', 'JS'],
    id: 'id-7',
  },
  {
    title: 'PhoneBook',
    category: 'Solo Components',
    gitHub: 'https://github.com/AndrewOPP/goit-react-hw-02-phonebook',
    livePage: 'https://andrewopp.github.io/goit-react-hw-02-phonebook/',
    keyWords: ['React'],
    id: 'id-8',
  },
  {
    title: 'Feedback',
    category: 'Solo Components',
    gitHub: 'https://github.com/AndrewOPP/goit-react-hw-02-feedback',
    livePage: 'https://andrewopp.github.io/goit-react-hw-02-feedback/',
    keyWords: ['React'],
    id: 'id-9',
  },
];

export class App extends Component {
  state = {
    projects: projects,
    filterWord: 'All projects',
  };

  keyFromMenu = typeOfProj => {
    this.setState({
      filterWord: typeOfProj,
    });
  };

  // ProjectsListMarkUp = key => {};

  render() {
    return (
      <MainDivvv>
        <div>
          <Menu
            currentCategory={this.state.filterWord}
            onKeyFromMenu={this.keyFromMenu}
          />
        </div>
        <MainDiv>
          <FindFilter />
          <ProjectsList
            filterWord={this.state.filterWord}
            projects={this.state.projects}
          />
        </MainDiv>
      </MainDivvv>
    );
  }
}
