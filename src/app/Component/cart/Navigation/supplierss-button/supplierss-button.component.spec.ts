import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierssButtonComponent } from './supplierss-button.component';

describe('SupplierssButtonComponent', () => {
  let component: SupplierssButtonComponent;
  let fixture: ComponentFixture<SupplierssButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierssButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierssButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
