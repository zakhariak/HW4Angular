import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  arrWords: Array<string> = [];
  badWord: string;
  allBadWords: string;
  textarea: string;
  alertInput = false;
  alertTextarea = false;
  inputPlaceholder = 'word here...';
  textareaPlaceholder = 'text here...';

  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.badWord == undefined || this.badWord.length == 0) {
      this.alertInput = true;
      this.inputPlaceholder = 'Please write a word!';
    } else {
      this.arrWords.push(this.badWord);
      this.allBadWords = this.arrWords.join();
      this.badWord = '';
    }
  }

  resetBadWords(): void {
    this.arrWords.splice(0, this.arrWords.length)
    this.allBadWords = '';
  }

  defInput(): void {
    this.alertInput = false;
    this.inputPlaceholder = 'word here...';
  }

  defTextArea(): void {
    this.alertTextarea = false;
    this.textareaPlaceholder = 'text here...';
  }


  cenzor(): void {
    if (this.textarea == undefined || this.textarea.length == 0) {
      this.alertTextarea = true;
      this.textareaPlaceholder = 'Please write a text!';
    } else {
      for (let i: number = 0; i < this.arrWords.length; i++) {
        this.textarea = this.textarea.replace(new RegExp(this.arrWords[i], 'g'), '*'.repeat(this.arrWords[i].length));
      }
    }
  }
}