import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclutadorComponent } from './reclutador.component';

describe('ReclutadorComponent', () => {
  let component: ReclutadorComponent;
  let fixture: ComponentFixture<ReclutadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclutadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclutadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
