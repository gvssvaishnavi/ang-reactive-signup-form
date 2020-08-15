import {FormGroup} from '@angular/forms';


export function PasswordChecker(controlName: string, 
    CompareControlName: string){
        return (FormGroup: FormGroup) =>{
            const password = FormGroup.controls[controlName];
            const confPassword = FormGroup.controls[CompareControlName];

            if(password.value !== confPassword){
                confPassword.setErrors({mustMatch: true});
            }
            else{
                confPassword.setErrors(null);
            }
        }

}