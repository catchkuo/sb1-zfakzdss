import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="editor-container">
      <h2>Editor</h2>
      <!-- Code editor will go here -->
    </div>
  `
})
export class EditorComponent {
  // Editor logic will go here
}