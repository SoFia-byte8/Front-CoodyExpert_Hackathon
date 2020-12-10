import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosUserComponent } from './modificar-datos-user.component';

describe('ModificarDatosUserComponent', () => {
  let component: ModificarDatosUserComponent;
  let fixture: ComponentFixture<ModificarDatosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
