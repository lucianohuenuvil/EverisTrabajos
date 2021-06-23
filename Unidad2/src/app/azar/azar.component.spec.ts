import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzarComponent } from './azar.component';

describe('AzarComponent', () => {
  let component: AzarComponent;
  let fixture: ComponentFixture<AzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
