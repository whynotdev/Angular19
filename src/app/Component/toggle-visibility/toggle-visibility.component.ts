import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-visibility',
  imports: [],
  templateUrl: './toggle-visibility.component.html',
  styleUrl: './toggle-visibility.component.css'
})
export class ToggleVisibilityComponent {
  currentPage = 1;
  itemsPerPage = 5;
  data = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
  ];

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
