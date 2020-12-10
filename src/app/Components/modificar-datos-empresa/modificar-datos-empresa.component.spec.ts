import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosEmpresaComponent } from './modificar-datos-empresa.component';

describe('ModificarDatosEmpresaComponent', () => {
  let component: ModificarDatosEmpresaComponent;
  let fixture: ComponentFixture<ModificarDatosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
