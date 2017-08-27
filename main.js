import {projectWriter} from './projectWriter.js';

const projects = [
  {name: 'Project 1', description: 'This is a sample project I did this one time.'},
  {name: 'Chromeboook Data Science', description: 'See how much of a datascience workflow can be done on a chromebook!'}
];

const projectsText = projects.reduce( (whole, current) => whole.concat(projectWriter(current)), '');

document.getElementById('projects').innerHTML = projectsText;