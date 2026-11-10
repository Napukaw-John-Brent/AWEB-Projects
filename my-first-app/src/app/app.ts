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

  profile = 'I am a student interested in Cybersecurity despite being in web development. I enjoy learning new technologies and building useful applications as well as earning money.';

  skills = [
    'HTML, CSS and JavaScript',
    'Python',
    'TypeScript',
    'Angular',
    'Java',
    'VibeCoding'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `Congratulations for clicking the button ${this.clickCount} time(s), you finally got something right.`;
  }
}
