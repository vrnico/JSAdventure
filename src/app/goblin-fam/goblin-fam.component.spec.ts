import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinFamComponent } from './goblin-fam.component';

describe('GoblinFamComponent', () => {
  let component: GoblinFamComponent;
  let fixture: ComponentFixture<GoblinFamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinFamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
