import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesParentsComponent } from './games_parents.component';

describe('GamesParentsComponent', () => {
  let component: GamesParentsComponent;
  let fixture: ComponentFixture<GamesParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
