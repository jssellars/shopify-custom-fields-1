import { Component, OnInit } from '@angular/core';
import { SocialLink } from '../../model/social-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/itsmarkmead'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/markmead'
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com/markmead'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
