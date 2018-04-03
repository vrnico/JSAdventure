import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLoveComponent } from './tree-love.component';

describe('TreeLoveComponent', () => {
  let component: TreeLoveComponent;
  let fixture: ComponentFixture<TreeLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
