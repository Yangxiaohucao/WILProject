import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  firstName:string;
  lastName:string;
  email:string;
  contacts = [{firstName: 'Fran', lastName: 'Jipani', email:
'f.jipani@griffith.edu.au'},{firstName: 'BoB', lastName: 'Man', email:
'f.jipani@griffith.edu.au'},{firstName: 'Kate', lastName: 'Johnson', email:
'f.jipani@griffith.edu.au'}];

constructor(private modalController: ModalController){}
   
async addContact(){
 
  const modal = await this.modalController.create({
    component: ModalPage,
    componentProps: { }
  });

modal.onDidDismiss()
  .then((retval) => {
    if (retval.data !== undefined){
      this.contacts.push(retval.data)
    }
});
 return modal.present();
}

async edit(i:number){
 
  const editmodal = await this.modalController.create({
    component: ModalPage,
    componentProps: { 
      firstName: this.contacts[i].firstName,
      lastName:this.contacts[i].lastName, 
      email:this.contacts[i].email,
      }
  });
 

  editmodal.onDidDismiss()
    .then((retval) => {
    
      this.contacts[i].firstName = retval.data.firstName;
      this.contacts[i].lastName = retval.data.lastName;
      this.contacts[i].email = retval.data.email;
 });
   return editmodal.present();
}
deleteContact(i:number){
 
  this.contacts.splice(i,1);
}
}
