import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeHateComponent } from './tree-hate.component';

describe('TreeHateComponent', () => {
  let component: TreeHateComponent;
  let fixture: ComponentFixture<TreeHateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeHateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeHateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
