import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWolfComponent } from './free-wolf.component';

describe('FreeWolfComponent', () => {
  let component: FreeWolfComponent;
  let fixture: ComponentFixture<FreeWolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeWolfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeWolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
