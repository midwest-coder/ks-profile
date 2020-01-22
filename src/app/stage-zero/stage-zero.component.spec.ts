import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageZeroComponent } from './stage-zero.component';

describe('StageZeroComponent', () => {
  let component: StageZeroComponent;
  let fixture: ComponentFixture<StageZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
