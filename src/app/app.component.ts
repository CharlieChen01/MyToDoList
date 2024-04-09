import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import {Item} from './item'
import {ItemComponent} from './item/item.component'

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  // title = 'todo';
  componentTitle = "My To Do List";
  filter: "all"|"active"|"done" = "all";
  allItems = [
    {description:`Collaboration & Communication:
    Participate in morning code reviews and team meetings.
    Work with product managers, designers, and back-end engineers to discuss front-end strategies.`, done: true},
    {description:`Code Writing:
    Create user-friendly web pages using markup languages like HTML, CSS, and JavaScript.
    Develop and maintain user interfaces.
    Implement the design on the mobile website.`, done: false},
    {description:`Project management:
    Check a task management tool like Asana or Trello to evaluate the tasks assigned to you.
    Complete the remaining tasks from the previous day.
    Performance Optimization:
    Optimize the app for maximum speed.
    Design mobile-based functionality.`, done: false},
    {description:`Quality assurance:
    Work with back-end developers to solve coding and troubleshooting issues.
    High quality to ensure graphic standards and brand consistency.`, done: false},
    {description:`Continuous Learning:
    Learn about emerging technologies.
    Update and maintain the code base.`, done: false},
    ];

  get items(){
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>this.filter === "done"? item.done : !item.done);
  }

  addItem(description: string) {
    if (!description) return;
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
