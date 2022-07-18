import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvaluationsComponent } from './page-evaluations.component';

describe('PageEvaluationsComponent', () => {

  let component: PageEvaluationsComponent;
  let fixture: ComponentFixture<PageEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});