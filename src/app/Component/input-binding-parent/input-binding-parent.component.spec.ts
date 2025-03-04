import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingParentComponent } from './input-binding-parent.component';

describe('InputBindingParentComponent', () => {
  let component: InputBindingParentComponent;
  let fixture: ComponentFixture<InputBindingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBindingParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
