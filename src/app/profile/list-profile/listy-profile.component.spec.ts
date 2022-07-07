import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListyProfileComponent } from './listy-profile.component';

describe('ListyProfileComponent', () => {
  let component: ListyProfileComponent;
  let fixture: ComponentFixture<ListyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
