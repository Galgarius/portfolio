import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalahaComponent } from './kalaha.component';

describe('KalahaComponent', () => {
  let component: KalahaComponent;
  let fixture: ComponentFixture<KalahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalahaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
