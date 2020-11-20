import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosAlegriasComponent } from './beneficios-alegrias.component';

describe('BeneficiosAlegriasComponent', () => {
  let component: BeneficiosAlegriasComponent;
  let fixture: ComponentFixture<BeneficiosAlegriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiosAlegriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosAlegriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
