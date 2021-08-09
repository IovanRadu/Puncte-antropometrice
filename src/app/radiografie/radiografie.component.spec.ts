/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadiografieComponent } from './radiografie.component';

describe('RadiografieComponent', () => {
  let component: RadiografieComponent;
  let fixture: ComponentFixture<RadiografieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiografieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
