import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlineacionEncajeComponent } from './alineacion-encaje.component';

describe('AlineacionEncajeComponent', () => {
  let component: AlineacionEncajeComponent;
  let fixture: ComponentFixture<AlineacionEncajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlineacionEncajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlineacionEncajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
