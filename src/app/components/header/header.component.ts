import { AfterRenderPhase, Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { afterNextRender } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DatePipe, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  date$:Observable<Date>
  constructor() {
    afterNextRender(() => {
      this.date$ = new Observable(obs=>{
        setInterval(()=>{
          obs.next(new Date())
        },1000)
      })
    }, {phase: AfterRenderPhase.Write});
  }
  ngOnInit(): void {}

  
  
  
}
