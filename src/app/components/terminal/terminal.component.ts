import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="terminal-container" #terminal></div>
  `
})
export class TerminalComponent implements OnInit {
  @ViewChild('terminal', { static: true }) terminalElement!: ElementRef;
  private terminal!: Terminal;
  private fitAddon!: FitAddon;

  ngOnInit() {
    this.initTerminal();
  }

  private initTerminal() {
    this.terminal = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e'
      }
    });

    this.fitAddon = new FitAddon();
    this.terminal.loadAddon(this.fitAddon);
    
    this.terminal.open(this.terminalElement.nativeElement);
    this.fitAddon.fit();

    // Basic terminal prompt
    this.terminal.write('$ ');
  }
}