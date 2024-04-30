import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpicPage } from './epic.page';

describe('EpicPage', () => {
  let component: EpicPage;
  let fixture: ComponentFixture<EpicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
