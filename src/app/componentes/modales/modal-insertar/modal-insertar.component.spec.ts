import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsertarComponent } from './modal-insertar.component';

describe('ModalInsertarComponent', () => {
  let component: ModalInsertarComponent;
  let fixture: ComponentFixture<ModalInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInsertarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
