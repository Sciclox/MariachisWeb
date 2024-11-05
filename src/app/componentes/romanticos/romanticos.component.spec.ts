import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticosComponent } from './romanticos.component';

describe('RomanticosComponent', () => {
  let component: RomanticosComponent;
  let fixture: ComponentFixture<RomanticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
