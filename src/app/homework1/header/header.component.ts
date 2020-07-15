import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>List of prohibited words:</h1>
    </header>
  `,
  styles: ['header { width: 100 %; height: 10vh; background-color: #e1e1e1; text-align: center; border-bottom: 1px solid #a3a3a3 }']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
