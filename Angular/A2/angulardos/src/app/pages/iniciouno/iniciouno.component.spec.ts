import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciounoComponent } from './iniciouno.component';

describe('IniciounoComponent', () => {
  let component: IniciounoComponent;
  let fixture: ComponentFixture<IniciounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
