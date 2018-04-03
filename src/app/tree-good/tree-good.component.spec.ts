import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGoodComponent } from './tree-good.component';

describe('TreeGoodComponent', () => {
  let component: TreeGoodComponent;
  let fixture: ComponentFixture<TreeGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
