import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPersonnelComponent } from './edition-personnel.component';

describe('EditionPersonnelComponent', () => {
  let component: EditionPersonnelComponent;
  let fixture: ComponentFixture<EditionPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionPersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
