import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillPurpleComponent } from './kill-purple.component';

describe('KillPurpleComponent', () => {
  let component: KillPurpleComponent;
  let fixture: ComponentFixture<KillPurpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillPurpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
