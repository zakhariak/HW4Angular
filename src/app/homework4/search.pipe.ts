import { Pipe, PipeTransform } from '@angular/core';
import { Iphone } from './userPhone.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(phoneUser: Array<Iphone>, searchText: any): unknown {
    if (!phoneUser) {
      return []
    };
    if (!searchText) {
      return phoneUser
    };
    return phoneUser.filter(elm => elm.firstName.toLowerCase().includes(searchText.toLowerCase()) || elm.lastName.toLowerCase().includes(searchText.toLowerCase()) || elm.phoneNumber.toString().includes(searchText));
  }

}
