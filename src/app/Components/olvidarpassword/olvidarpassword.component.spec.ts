import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarpasswordComponent } from './olvidarpassword.component';

describe('OlvidarpasswordComponent', () => {
  let component: OlvidarpasswordComponent;
  let fixture: ComponentFixture<OlvidarpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
