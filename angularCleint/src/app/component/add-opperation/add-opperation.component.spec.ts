import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpperationComponent } from './add-opperation.component';

describe('AddOpperationComponent', () => {
  let component: AddOpperationComponent;
  let fixture: ComponentFixture<AddOpperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
