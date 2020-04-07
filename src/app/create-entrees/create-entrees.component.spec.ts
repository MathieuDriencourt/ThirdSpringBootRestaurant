import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntreesComponent } from './create-entrees.component';

describe('CreateEntreesComponent', () => {
  let component: CreateEntreesComponent;
  let fixture: ComponentFixture<CreateEntreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
