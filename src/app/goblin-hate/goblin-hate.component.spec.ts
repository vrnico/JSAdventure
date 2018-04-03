import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinHateComponent } from './goblin-hate.component';

describe('GoblinHateComponent', () => {
  let component: GoblinHateComponent;
  let fixture: ComponentFixture<GoblinHateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinHateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinHateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
