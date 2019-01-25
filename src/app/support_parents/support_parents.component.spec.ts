import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportParentsComponent } from './support_parents.component';

describe('SupportParentsComponent', () => {
  let component: SupportParentsComponent;
  let fixture: ComponentFixture<SupportParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
