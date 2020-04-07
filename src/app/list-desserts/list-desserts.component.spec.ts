import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDessertsComponent } from './list-desserts.component';

describe('ListDessertsComponent', () => {
  let component: ListDessertsComponent;
  let fixture: ComponentFixture<ListDessertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDessertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
