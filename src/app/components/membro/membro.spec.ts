import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Membro } from './membro';

describe('Membro', () => {
  let component: Membro;
  let fixture: ComponentFixture<Membro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Membro],
    }).compileComponents();

    fixture = TestBed.createComponent(Membro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
