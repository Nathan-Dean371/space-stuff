import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarsRoverPhotosPage } from './mars-rover-photos.page';

describe('MarsRoverPhotosPage', () => {
  let component: MarsRoverPhotosPage;
  let fixture: ComponentFixture<MarsRoverPhotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoverPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
