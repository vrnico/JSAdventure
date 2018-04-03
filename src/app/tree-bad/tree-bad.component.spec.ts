import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBadComponent } from './tree-bad.component';

describe('TreeBadComponent', () => {
  let component: TreeBadComponent;
  let fixture: ComponentFixture<TreeBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
