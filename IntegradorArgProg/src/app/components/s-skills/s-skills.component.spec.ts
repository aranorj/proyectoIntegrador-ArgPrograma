import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSkillsComponent } from './s-skills.component';

describe('SSkillsComponent', () => {
  let component: SSkillsComponent;
  let fixture: ComponentFixture<SSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
