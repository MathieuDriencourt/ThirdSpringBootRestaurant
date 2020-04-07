import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoissonsComponent } from './list-boissons.component';

describe('ListBoissonsComponent', () => {
  let component: ListBoissonsComponent;
  let fixture: ComponentFixture<ListBoissonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoissonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
