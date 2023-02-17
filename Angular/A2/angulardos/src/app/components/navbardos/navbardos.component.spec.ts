import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardosComponent } from './navbardos.component';

describe('NavbardosComponent', () => {
  let component: NavbardosComponent;
  let fixture: ComponentFixture<NavbardosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
