import { Routes } from '@angular/router';
import { Task1Component } from './landing/pages/task1/task1.component';
import { Task2Component } from './landing/pages/task2/task2.component';
import { Task3Component } from './landing/pages/task3/task3.component';
import { Task4Component } from './landing/pages/task4/task4.component';

const appRoutes: Routes = [
    { path: 'task1', 
      component: Task1Component 
    },
    {
      path: 'task2',
      component: Task2Component
    },
    { path: 'task3',
      component: Task3Component
    },
    { path: 'task4',
      component: Task4Component
    }
  ];

  export default appRoutes;