import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRowComponent } from './component-row.component';
import * as MOCK_DATA from '../../../data/sample.json';

describe('ComponentRowComponent', () => {
  let component: ComponentRowComponent;
  let fixture: ComponentFixture<ComponentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRowComponent);
    component = fixture.componentInstance;

    component.componentData = MOCK_DATA;
    component.level = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
