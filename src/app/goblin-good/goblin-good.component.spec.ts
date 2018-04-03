import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinGoodComponent } from './goblin-good.component';

describe('GoblinGoodComponent', () => {
  let component: GoblinGoodComponent;
  let fixture: ComponentFixture<GoblinGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
