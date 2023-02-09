import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciodosComponent } from './iniciodos.component';

describe('IniciodosComponent', () => {
  let component: IniciodosComponent;
  let fixture: ComponentFixture<IniciodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
