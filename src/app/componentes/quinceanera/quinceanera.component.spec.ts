import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinceaneraComponent } from './quinceanera.component';

describe('QuinceaneraComponent', () => {
  let component: QuinceaneraComponent;
  let fixture: ComponentFixture<QuinceaneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinceaneraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinceaneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
