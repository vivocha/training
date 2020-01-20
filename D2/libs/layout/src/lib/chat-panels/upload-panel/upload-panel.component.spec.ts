import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPanelComponent } from './upload-panel.component';

describe('UploadPanelComponent', () => {
  let component: UploadPanelComponent;
  let fixture: ComponentFixture<UploadPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
