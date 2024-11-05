import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailableComponent } from './bailable.component';

describe('BailableComponent', () => {
  let component: BailableComponent;
  let fixture: ComponentFixture<BailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
