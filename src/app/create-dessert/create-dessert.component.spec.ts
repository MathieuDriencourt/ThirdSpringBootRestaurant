import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDessertComponent } from './create-dessert.component';

describe('CreateDessertComponent', () => {
  let component: CreateDessertComponent;
  let fixture: ComponentFixture<CreateDessertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDessertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
