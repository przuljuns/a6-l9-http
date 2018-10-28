import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { KontoTableComponent } from './konto-table.component';

describe('KontoTableComponent', () => {
  let component: KontoTableComponent;
  let fixture: ComponentFixture<KontoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontoTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
