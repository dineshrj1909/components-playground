import { Component, OnInit } from '@angular/core';
import CapitalComponent from 'src/app/types/ComponentRow';

import * as MOCK_DATA from '../../../data/sample.json';

@Component({
  selector: 'app-nested-accordion',
  templateUrl: './nested-accordion.component.html',
  styleUrls: ['./nested-accordion.component.css'],
})
export class NestedAccordionComponent implements OnInit {
  data: CapitalComponent = MOCK_DATA;

  constructor() {}

  ngOnInit(): void {}
}
