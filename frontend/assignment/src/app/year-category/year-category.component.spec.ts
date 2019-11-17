import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearCategoryComponent } from './year-category.component';

describe('YearCategoryComponent', () => {
  let component: YearCategoryComponent;
  let fixture: ComponentFixture<YearCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
