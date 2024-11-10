type job = 'html' | 'front' | 'web' | 'full' | 'back';

export interface specialist {
  firstname: string;
  lastname: string;
  age: number;
  salary: number;
  person: string;
  job: job;
  id: number;
}

export interface task {
  title: string;
  description: string;
  id: string;
}
