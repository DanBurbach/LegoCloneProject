import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopParentsComponent } from './shop-parents.component';

describe('ShopParentsComponent', () => {
  let component: ShopParentsComponent;
  let fixture: ComponentFixture<ShopParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
