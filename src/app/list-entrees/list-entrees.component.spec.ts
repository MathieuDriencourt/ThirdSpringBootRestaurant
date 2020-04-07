import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntreesComponent } from './list-entrees.component';

describe('ListEntreesComponent', () => {
  let component: ListEntreesComponent;
  let fixture: ComponentFixture<ListEntreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
