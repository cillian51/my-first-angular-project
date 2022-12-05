import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionVolsComponent } from './edition-vols.component';

describe('EditionVolsComponent', () => {
  let component: EditionVolsComponent;
  let fixture: ComponentFixture<EditionVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionVolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
