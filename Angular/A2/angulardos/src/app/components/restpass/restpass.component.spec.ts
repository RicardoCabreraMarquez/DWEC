import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpassComponent } from './restpass.component';

describe('RestpassComponent', () => {
  let component: RestpassComponent;
  let fixture: ComponentFixture<RestpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
