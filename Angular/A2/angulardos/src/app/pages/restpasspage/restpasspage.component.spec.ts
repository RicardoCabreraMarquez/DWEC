import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpasspageComponent } from './restpasspage.component';

describe('RestpasspageComponent', () => {
  let component: RestpasspageComponent;
  let fixture: ComponentFixture<RestpasspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestpasspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestpasspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
