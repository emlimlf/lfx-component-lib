import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfxComponentLibComponent } from './lfx-component-lib.component';

describe('LfxComponentLibComponent', () => {
  let component: LfxComponentLibComponent;
  let fixture: ComponentFixture<LfxComponentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LfxComponentLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LfxComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
