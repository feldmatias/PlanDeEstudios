import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedSubjectsPage } from './blocked-subjects.page';

describe('BlockedSubjectsPage', () => {
  let component: BlockedSubjectsPage;
  let fixture: ComponentFixture<BlockedSubjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedSubjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedSubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
