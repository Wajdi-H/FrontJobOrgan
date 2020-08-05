import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisjobComponent } from './detaisjob.component';

describe('DetaisjobComponent', () => {
  let component: DetaisjobComponent;
  let fixture: ComponentFixture<DetaisjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
