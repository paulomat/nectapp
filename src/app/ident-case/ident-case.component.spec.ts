import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentCaseComponent } from './ident-case.component';

describe('IdentCaseComponent', () => {
  let component: IdentCaseComponent;
  let fixture: ComponentFixture<IdentCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
