import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPortafolioLinesComponent } from './list-portafolio-lines.component';

describe('ListPortafolioLinesComponent', () => {
  let component: ListPortafolioLinesComponent;
  let fixture: ComponentFixture<ListPortafolioLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPortafolioLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPortafolioLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
