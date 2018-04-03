import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinLoveComponent } from './goblin-love.component';

describe('GoblinLoveComponent', () => {
  let component: GoblinLoveComponent;
  let fixture: ComponentFixture<GoblinLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
