import { Routes } from '@angular/router';
import { GoodsComponent } from './components/pages/goods/goods.component';
import { BasketComponent } from './components/pages/basket/basket.component';
import { DirectivesComponent } from './components/pages/directives/directives.component';
import { AnimationsComponent } from './components/pages/animations/animations.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormComponent } from './components/pages/form/form.component';
import { GoodComponent } from './components/pages/goods/good/good.component';
import { AttributeDirectivesComponent } from './components/pages/directives/attributedirectives/attributedirectives.component';
import { StructureDirectivesComponent } from './components/pages/directives/structuredirectives/structuredirectives.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { Specialist } from './components/pages/specialist/specialist.component';
import { TaskBoardComponent } from './components/pages/task-board/task-board.component';
import { AddSpecialistComponent } from './components/pages/specialist/add-specialist/add-specialist.component';
import { ListSpecialistComponent } from './components/pages/specialist/list-specialist/list-specialist.component';
import { AddTaskComponent } from './components/pages/task-board/add-task/add-task.component';
import { ListTasksComponent } from './components/pages/task-board/list-tasks/list-tasks.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'goods',component:GoodsComponent},
    {path:'good/:id',component:GoodComponent},
    {path:'basket',component:BasketComponent},
    {path:'directives',component:DirectivesComponent,children:[
        {path:'structuredirectives',component:StructureDirectivesComponent},
        {path:'attributedirectives',component:AttributeDirectivesComponent},
    ]},
    {path:'animations',component:AnimationsComponent},
    {path:'form',component:FormComponent},
    {path:'specialist',component:Specialist,children:[
        {path:'addspecialist',component:AddSpecialistComponent},
        {path:'listspecialist',component:ListSpecialistComponent},
    ]},
    {path:'taskboard',component:TaskBoardComponent,children:[
        {path:'addtask',component:AddTaskComponent},
        {path:'listtasks',component:ListTasksComponent},
    ]},
    {path:'error',component:ErrorPageComponent},
    {path:'**',redirectTo:'/error'},
];
