import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUser } from './criar-user';

describe('CriarUser', () => {
  let component: CriarUser;
  let fixture: ComponentFixture<CriarUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarUser],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
