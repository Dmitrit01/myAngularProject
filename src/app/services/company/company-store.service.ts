import { Injectable } from '@angular/core';
import { specialist, task } from './company-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompanyStoreService {
  isFilter: boolean = false;
  listSpecialists: specialist[] = [
    {
      firstname: 'Вадим',
      lastname: 'Кругляков',
      age: 38,
      salary: 730,
      person: 'man',
      job: 'full',
      id: 1,
    },
    {
      firstname: 'Оля',
      lastname: 'Карабицкая',
      age: 34,
      salary: 1240,
      person: 'woman',
      job: 'html',
      id: 2,
    },
    {
      firstname: 'Кирилл',
      lastname: 'Юрганов',
      age: 28,
      salary: 500,
      person: 'man',
      job: 'back',
      id: 3,
    },
    {
      firstname: 'Екатерина',
      lastname: 'Маликова',
      age: 33,
      salary: 650,
      person: 'woman',
      job: 'web',
      id: 4,
    },
    {
      firstname: 'Игорь',
      lastname: 'Процукевич',
      age: 38,
      salary: 700,
      person: 'man',
      job: 'front',
      id: 5,
    },
    {
      firstname: 'Юля',
      lastname: 'Старцева',
      age: 34,
      salary: 1200,
      person: 'woman',
      job: 'html',
      id: 6,
    },
    {
      firstname: 'Артем',
      lastname: 'Антихович',
      age: 27,
      salary: 1500,
      person: 'man',
      job: 'back',
      id: 7,
    },
    {
      firstname: 'Оля',
      lastname: 'Кожемякина',
      age: 38,
      salary: 750,
      person: 'woman',
      job: 'web',
      id: 8,
    },
    {
      firstname: 'Артур',
      lastname: 'Каминский',
      age: 48,
      salary: 1250,
      person: 'man',
      job: 'full',
      id: 9,
    },
    {
      firstname: 'Рита',
      lastname: 'Старцева',
      age: 23,
      salary: 1000,
      person: 'woman',
      job: 'html',
      id: 10,
    },
    {
      firstname: 'Ваня',
      lastname: 'Ярощук',
      age: 22,
      salary: 1950,
      person: 'man',
      job: 'back',
      id: 11,
    },
    {
      firstname: 'Людмила',
      lastname: 'Сащенко',
      age: 46,
      salary: 770,
      person: 'woman',
      job: 'front',
      id: 12,
    },
  ];
  listSpecialistsFilter: specialist[] = [];
  startArrayTasks: task[] = [
    {
      description: 'вап',
      id: 1,
      numId: 652,
      state: 'start',
      title: 'вап',
    },
  ];
  progressArrayTasks:task[] = []
  testArrayTasks:task[] = []
  readyArrayTasks:task[] = []
  constructor() {}
}
