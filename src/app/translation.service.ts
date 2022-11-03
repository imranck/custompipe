import { Injectable } from '@angular/core';
// import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class TranslationSet {
  public language!: string;
  public values: { [key: string]:any} = {}
}
export class TranslationService {

  // public languages=['en','de']

  public language:any=localStorage.getItem('lang')

  private dictionary: { [key: string]: TranslationSet } = {
    'en': {
      language: 'en',
      values: {
        'name': 'name',
        'gender':'gender',
        'species':'species'
      },
    },
    'de': {
        language: 'de',
        values: {
          'name': 'Name',
          'gender':'Geschlecht',
          'species':'Spezies'
        },
    },
    'ar':{
      language:'ar',
      values:{
        'name':'اسم',
        'gender':'جنس',
        'species':'محيط'
      }

    }
  }

  constructor() {}

  translate(value: string): any {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value]
    }
    console.log(localStorage.getItem('lang'));
  }

}
