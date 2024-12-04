import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ageValidator(maxAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = control.value;
    return age > maxAge ? { maxAgeExceeded: { max: maxAge, actual: age } } : null;
  };
}
