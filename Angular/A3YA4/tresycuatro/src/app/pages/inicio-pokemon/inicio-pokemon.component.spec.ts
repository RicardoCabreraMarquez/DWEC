import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPokemonComponent } from './inicio-pokemon.component';

describe('InicioPokemonComponent', () => {
  let component: InicioPokemonComponent;
  let fixture: ComponentFixture<InicioPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
