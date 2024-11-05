import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeloriosComponent } from './velorios.component';

describe('VeloriosComponent', () => {
  let component: VeloriosComponent;
  let fixture: ComponentFixture<VeloriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeloriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeloriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
