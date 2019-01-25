import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoLifeParentsComponent } from './lego_life_parents.component';

describe('LegoLifeParentsComponent', () => {
  let component: LegoLifeParentsComponent;
  let fixture: ComponentFixture<LegoLifeParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoLifeParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoLifeParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
