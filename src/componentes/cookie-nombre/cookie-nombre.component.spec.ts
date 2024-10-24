import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieNombreComponent } from './cookie-nombre.component';

describe('CookieNombreComponent', () => {
  let component: CookieNombreComponent;
  let fixture: ComponentFixture<CookieNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieNombreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
