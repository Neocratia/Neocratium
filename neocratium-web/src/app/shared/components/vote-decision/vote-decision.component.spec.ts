import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDecisionComponent } from './vote-decision.component';

describe('VoteDecisionComponent', () => {
  let component: VoteDecisionComponent;
  let fixture: ComponentFixture<VoteDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
