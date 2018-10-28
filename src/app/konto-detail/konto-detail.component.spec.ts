import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoDetailComponent } from './konto-detail.component';

describe('KontoDetailComponent', () => {
  let component: KontoDetailComponent;
  let fixture: ComponentFixture<KontoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
