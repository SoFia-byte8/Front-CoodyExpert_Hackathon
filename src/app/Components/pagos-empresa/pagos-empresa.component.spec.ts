import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosEmpresaComponent } from './pagos-empresa.component';

describe('PagosEmpresaComponent', () => {
  let component: PagosEmpresaComponent;
  let fixture: ComponentFixture<PagosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
