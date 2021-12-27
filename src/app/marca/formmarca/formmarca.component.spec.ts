import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmarcaComponent } from './formmarca.component';

describe('FormmarcaComponent', () => {
  let component: FormmarcaComponent;
  let fixture: ComponentFixture<FormmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
