import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasicsComponent } from './databasics.component';

describe('DatabasicsComponent', () => {
  let component: DatabasicsComponent;
  let fixture: ComponentFixture<DatabasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
