import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashClothComponent } from './wash-cloth.component';

describe('WashClothComponent', () => {
  let component: WashClothComponent;
  let fixture: ComponentFixture<WashClothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashClothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
