import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCompanyComponent } from './tarjetas-company.component';

describe('TarjetasCompanyComponent', () => {
  let component: TarjetasCompanyComponent;
  let fixture: ComponentFixture<TarjetasCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
