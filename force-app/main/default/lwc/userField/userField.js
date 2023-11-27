import { LightningElement,api } from 'lwc';

export default class UserField extends LightningElement {

    @api objectApiName
    @api recordId
    handledownload(){
        window.open("https://github.com/Nazir199/NazirResume/blob/a351a7f26b76a867b6cb854880c23957e7e5560e/Asif_Patel_Resume.pdf","_blank")
    }
}