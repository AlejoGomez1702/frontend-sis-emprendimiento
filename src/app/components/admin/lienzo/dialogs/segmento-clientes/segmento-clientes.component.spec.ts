import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoClientesComponent } from './segmento-clientes.component';

describe('SegmentoClientesComponent', () => {
  let component: SegmentoClientesComponent;
  let fixture: ComponentFixture<SegmentoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
