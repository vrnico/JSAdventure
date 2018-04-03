import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinBadComponent } from './goblin-bad.component';

describe('GoblinBadComponent', () => {
  let component: GoblinBadComponent;
  let fixture: ComponentFixture<GoblinBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
