import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetDistancePagePage } from './planet-distance-page.page';

describe('PlanetDistancePagePage', () => {
  let component: PlanetDistancePagePage;
  let fixture: ComponentFixture<PlanetDistancePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDistancePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
