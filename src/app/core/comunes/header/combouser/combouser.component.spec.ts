import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombouserComponent } from './combouser.component';

describe('CombouserComponent', () => {
  let component: CombouserComponent;
  let fixture: ComponentFixture<CombouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
