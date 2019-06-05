import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLineFormComponent } from './portfolio-line-form.component';

describe('PortfolioLineFormComponent', () => {
  let component: PortfolioLineFormComponent;
  let fixture: ComponentFixture<PortfolioLineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
