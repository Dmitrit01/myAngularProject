import { FormControl } from '@angular/forms';

export class MyValidators {
  static restrictedEmail(control: FormControl): {
    [key: string]: boolean;
  } {
    if (
      ['react@mail.ru', 'vue@mail.ru', 'test@mail.ru'].includes(control.value)
    ) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static minNumberDifferentCharacters =
    (
      number: number,
      lowerRus: number,
      upperRus: number,
      lowerEngl: number,
      upperEngl: number
    ) =>
    (control: FormControl): { [key: string]: boolean | number } => {
      let valuePass = '' + control.value;
      let actualNumber: number = 0;
      let actualLowerRus: number = 0;
      let actualUpperRus: number = 0;
      let actualLowerEngl: number = 0;
      let actualUpperEngl: number = 0;

      for (let i = 0; i <= valuePass.length; i++) {
        if (valuePass.charCodeAt(i) >= 48 && valuePass.charCodeAt(i) <= 57) {
          actualNumber++;
        } else if (
          valuePass.charCodeAt(i) >= 1072 &&
          valuePass.charCodeAt(i) <= 1103
        ) {
          actualLowerRus++;
        } else if (
          valuePass.charCodeAt(i) >= 1040 &&
          valuePass.charCodeAt(i) <= 1071
        ) {
          actualUpperRus++;
        } else if (
          valuePass.charCodeAt(i) >= 97 &&
          valuePass.charCodeAt(i) <= 122
        ) {
          actualLowerEngl++;
        } else if (
          valuePass.charCodeAt(i) >= 65 &&
          valuePass.charCodeAt(i) <= 90
        ) {
          actualUpperEngl++;
        }
      }
      if (
        number > actualNumber ||
        lowerRus > actualLowerRus ||
        upperRus > actualUpperRus ||
        lowerEngl > actualLowerEngl ||
        upperEngl > actualUpperEngl
      ) {
        return {
          minNumberDifferentCharacters: true,
          number: number,
          lowerRus,
          upperRus,
          lowerEngl,
          upperEngl,
          actualNumber,
          actualLowerRus,
          actualUpperRus,
          actualLowerEngl,
          actualUpperEngl,
        };
      }
      return null;
    };

  static onlyNumber(control: FormControl): {[key:string]:boolean} {
    let value = "" + control.value;
    for (let i = 0; i < value.length; i++) {
      if (!(value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57)) {
        return {
          onlyNumber: true,
        };
      } 
    }
    return null
  }
}
