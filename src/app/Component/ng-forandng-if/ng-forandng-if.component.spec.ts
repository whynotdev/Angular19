import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForandngIfComponent } from './ng-forandng-if.component';

describe('NgForandngIfComponent', () => {
  let component: NgForandngIfComponent;
  let fixture: ComponentFixture<NgForandngIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForandngIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForandngIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
