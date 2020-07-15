import { Component, OnInit } from '@angular/core';
import { IntTask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.scss']
})
export class Homework3Component implements OnInit {
  tasks: Array<IntTask> = [];
  name: string;
  status: boolean = false;
  textEdit: string;
  showEdit: boolean = false;
  saveI: number;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    const task: IntTask = new Task(this.name, this.status);
    console.log(this.tasks);
    this.tasks.push(task);
    this.name = '';
  }

  change(obj: IntTask): void {
    obj.status = !obj.status
  }

  editTask(index: number, obj: IntTask): void {
    this.showEdit = true;
    this.textEdit = obj.name;
    this.saveI = index;
  }

  saveEditTask(): void {
    const task: IntTask = new Task(this.textEdit, this.status)
    this.tasks.splice(this.saveI, 1, task);
    this.textEdit = '';
    this.showEdit = false;
  }

  deleteTask(index: number): void {
    this.tasks.splice((index), 1);
  }

}
