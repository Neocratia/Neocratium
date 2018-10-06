import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegateDialogComponent } from './delegate-dialog.component';

describe('DelegateDialogComponent', () => {
  let component: DelegateDialogComponent;
  let fixture: ComponentFixture<DelegateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
