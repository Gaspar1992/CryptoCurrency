import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLineComponent } from './portfolio-line.component';

describe('PortfolioLineComponent', () => {
  let component: PortfolioLineComponent;
  let fixture: ComponentFixture<PortfolioLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
