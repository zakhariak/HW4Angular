import { Component, OnInit, TemplateRef } from '@angular/core';
import { Iphone } from './userPhone.interface';
import { UsPhone } from './userPhone.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrls: ['./homework4.component.scss']
})
export class Homework4Component implements OnInit {
  searchPlace: string | number;
  phoneBook: Array<Iphone> = [
    {
      id: 1,
      firstName: 'Andrii',
      lastName: 'Zakhariak',
      phoneNumber: 380639337219
    }, {
      id: 2,
      firstName: 'Tania',
      lastName: 'Muran',
      phoneNumber: 380506825050
    },
    {
      id: 3,
      firstName: 'olef',
      lastName: 'andiska',
      phoneNumber: 380996825050
    }
  ];
  modalRef: BsModalRef;
  saveId: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  saveIndex: number;
  statusEdit: boolean = false;
  sortFirstName: boolean;
  sortLastName: boolean;
  sortNumber: boolean;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = null;
  }

  clearButton(): void {
    this.searchPlace = '';

  }

  saveAddUser(): void {
    const user: Iphone = new UsPhone(1, this.firstName, this.lastName, this.phoneNumber);
    if (this.phoneBook.length > 0) {
      this.phoneBook.slice(-1)[0].id + 1;
    }
    this.phoneBook.push(user);
    this.modalService.config.animated = false;
    this.modalRef.hide();
  }

  clickSortFirstName() {
    this.sortLastName = undefined;
    this.sortNumber = undefined;
    this.sortFirstName = !this.sortFirstName;
    if (this.sortFirstName == undefined) {
      return this.phoneBook
    } else if (this.sortFirstName) {
      return this.phoneBook.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1);
    } else {
      return this.phoneBook.sort((a, b) => (a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? 1 : -1);
    }
  }

  clickSortLastName() {
    this.sortFirstName = undefined;
    this.sortNumber = undefined;
    this.sortLastName = !this.sortLastName;
    if (this.sortLastName == undefined) {
      return this.phoneBook
    } else if (this.sortLastName) {
      return this.phoneBook.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1);
    } else {
      return this.phoneBook.sort((a, b) => (a.lastName.toLowerCase() < b.lastName.toLowerCase()) ? 1 : -1);
    }
  }

  clickSortNumber() {
    this.sortFirstName = undefined;
    this.sortLastName = undefined;
    this.sortNumber = !this.sortNumber;
    if (this.sortNumber == undefined) {
      return this.phoneBook
    } else if (this.sortNumber) {
      return this.phoneBook.sort((a, b) => a.phoneNumber - b.phoneNumber);
    } else {
      return this.phoneBook.sort((a, b) => b.phoneNumber - a.phoneNumber);
    }
  }

  editUser(user: Iphone, ind: number, template: TemplateRef<any>): void {
    this.openModal(template);
    this.saveIndex = ind;
    this.saveId = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phoneNumber = user.phoneNumber;
    this.statusEdit = true;
  }

  saveEditUser(): void {
    const newUser: Iphone = new UsPhone(this.saveId, this.firstName, this.lastName, this.phoneNumber);
    this.phoneBook.splice(this.saveIndex, 1, newUser);
    this.modalRef.hide();
    this.statusEdit = false;
  }

  deleteUser(index: number): void {
    this.phoneBook.splice((index), 1);
  }

}
