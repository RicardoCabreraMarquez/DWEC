import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpagesComponent } from './registerpages.component';

describe('RegisterpagesComponent', () => {
  let component: RegisterpagesComponent;
  let fixture: ComponentFixture<RegisterpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
