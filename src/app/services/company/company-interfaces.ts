type job = 'html' | 'front' | 'web' | 'full' | 'back';
type state = 'start' | 'progress' | 'test' | 'ready';

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
  id: number;
  numId:number;
  state:state;
}
