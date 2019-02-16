import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetListWrapperComponent } from './planet-list-wrapper.component';

describe('PlanetListWrapperComponent', () => {
  let component: PlanetListWrapperComponent;
  let fixture: ComponentFixture<PlanetListWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetListWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
