import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamaComponent } from './mama.component';

describe('MamaComponent', () => {
  let component: MamaComponent;
  let fixture: ComponentFixture<MamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
