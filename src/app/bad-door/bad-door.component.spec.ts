import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadDoorComponent } from './bad-door.component';

describe('BadDoorComponent', () => {
  let component: BadDoorComponent;
  let fixture: ComponentFixture<BadDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
