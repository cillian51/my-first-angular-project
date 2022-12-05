import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionProfilComponent } from './edition-profil.component';

describe('EditionProfilComponent', () => {
  let component: EditionProfilComponent;
  let fixture: ComponentFixture<EditionProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
