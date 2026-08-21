import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enviar } from './enviar';

describe('Enviar', () => {
  let component: Enviar;
  let fixture: ComponentFixture<Enviar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enviar],
    }).compileComponents();

    fixture = TestBed.createComponent(Enviar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
