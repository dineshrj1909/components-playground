import { Component, Input, OnInit } from '@angular/core';
import CapitalComponent from 'src/app/types/ComponentRow';

@Component({
  selector: 'app-component-row',
  templateUrl: './component-row.component.html',
  styleUrls: ['./component-row.component.css'],
})
export class ComponentRowComponent implements OnInit {
  @Input() componentData!: CapitalComponent;
  @Input() level!: number;
  expanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
