import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDoorComponent } from './good-door.component';

describe('GoodDoorComponent', () => {
  let component: GoodDoorComponent;
  let fixture: ComponentFixture<GoodDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
