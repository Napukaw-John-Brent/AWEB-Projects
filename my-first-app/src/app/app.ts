import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'John Brent Napukaw';
  location = 'Magalang, Pampanga';
  email = 'jcnapukaw.codegeeks@gmail.com';
  phone = '0991 972 4710';

  profile =
    'My goal is to become a well-rounded web developer who can build a complete product, from the interface a visitor sees to the server and database behind it. ' +
    'Right now I am strengthening my front-end skills with Angular and TypeScript while learning back-end development with Node.js and Express. ' +
    'Studying cybersecurity alongside web development has taught me to think about how an application could be attacked before I ship it, so I want to build sites that are secure as well as good-looking. ' +
    'I also teach and plan web development events with Code Geeks, which keeps me practicing what I learn. ' +
    'In the next few years, I hope to work on real client projects and grow into a confident full-stack developer.';

  skills = [
    'HTML, CSS and JavaScript',
    'TypeScript',
    'Angular',
    'Node.js and Express',
    'Python',
    'Java',
    'SQL and database design',
    'WordPress and Elementor',
    'Git and GitHub',
    'Cybersecurity fundamentals'
  ];

  proficiencies = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
    },
    {
      category: 'Frameworks and Back End',
      items: ['Angular', 'Node.js', 'Express', 'REST APIs']
    },
    {
      category: 'Web and Design Tools',
      items: ['HTML5', 'CSS3', 'WordPress', 'Elementor', 'Git', 'GitHub', 'VS Code', 'AI-assisted coding']
    },
    {
      category: 'Security and Networking',
      items: ['Network fundamentals', 'Web security basics', 'Safe handling of user input']
    }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `Congratulations for clicking the button ${this.clickCount} time(s), you finally got something right.`;
  }
}
