import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCandidatesComponent } from './page-candidates.component';

describe('PageCandidatesComponent', () => {

  let component: PageCandidatesComponent;
  let fixture: ComponentFixture<PageCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});