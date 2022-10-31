import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoascadComponent } from './pessoascad.component';

describe('PessoascadComponent', () => {
  let component: PessoascadComponent;
  let fixture: ComponentFixture<PessoascadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoascadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoascadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
