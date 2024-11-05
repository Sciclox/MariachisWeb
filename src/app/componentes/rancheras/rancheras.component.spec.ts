import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RancherasComponent } from './rancheras.component';

describe('RancherasComponent', () => {
  let component: RancherasComponent;
  let fixture: ComponentFixture<RancherasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RancherasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RancherasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
