import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarunoComponent } from './navbaruno.component';

describe('NavbarunoComponent', () => {
  let component: NavbarunoComponent;
  let fixture: ComponentFixture<NavbarunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
