import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiablogComponent } from './diablog.component';

describe('DiablogComponent', () => {
  let component: DiablogComponent;
  let fixture: ComponentFixture<DiablogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiablogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
