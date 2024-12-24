import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explorer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="explorer-container">
      <h2>Explorer</h2>
      <!-- File tree will go here -->
    </div>
  `
})
export class ExplorerComponent {
  // Explorer logic will go here
}