import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMusicsComponent } from './all-musics.component';

describe('AllMusicsComponent', () => {
  let component: AllMusicsComponent;
  let fixture: ComponentFixture<AllMusicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMusicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
