import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaJenkinsComponent } from './prueba-jenkins.component';

describe('PruebaJenkinsComponent', () => {
  let component: PruebaJenkinsComponent;
  let fixture: ComponentFixture<PruebaJenkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaJenkinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaJenkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
