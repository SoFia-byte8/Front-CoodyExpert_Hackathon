import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasUserComponent } from './tarjetas-user.component';

describe('TarjetasUserComponent', () => {
  let component: TarjetasUserComponent;
  let fixture: ComponentFixture<TarjetasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
