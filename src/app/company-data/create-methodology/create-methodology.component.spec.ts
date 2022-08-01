import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMethodologyComponent } from './create-methodology.component';

describe('CreateMethodologyComponent', () => {
  let component: CreateMethodologyComponent;
  let fixture: ComponentFixture<CreateMethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMethodologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
