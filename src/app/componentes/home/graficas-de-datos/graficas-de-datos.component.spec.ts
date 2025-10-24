import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasDeDatosComponent } from './graficas-de-datos.component';

describe('GraficasDeDatosComponent', () => {
  let component: GraficasDeDatosComponent;
  let fixture: ComponentFixture<GraficasDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficasDeDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficasDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
