import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsQualifierMainComponent } from './comics-qualifier-main.component';

describe('ComicsQualifierMainComponent', () => {
  let component: ComicsQualifierMainComponent;
  let fixture: ComponentFixture<ComicsQualifierMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsQualifierMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsQualifierMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
