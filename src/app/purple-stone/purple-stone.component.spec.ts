import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleStoneComponent } from './purple-stone.component';

describe('PurpleStoneComponent', () => {
  let component: PurpleStoneComponent;
  let fixture: ComponentFixture<PurpleStoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpleStoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
