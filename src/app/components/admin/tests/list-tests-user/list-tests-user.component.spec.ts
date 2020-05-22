import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestsUserComponent } from './list-tests-user.component';

describe('ListTestsUserComponent', () => {
  let component: ListTestsUserComponent;
  let fixture: ComponentFixture<ListTestsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTestsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTestsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
