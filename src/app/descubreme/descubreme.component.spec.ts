import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubremeComponent } from './descubreme.component';

describe('DescubremeComponent', () => {
  let component: DescubremeComponent;
  let fixture: ComponentFixture<DescubremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
