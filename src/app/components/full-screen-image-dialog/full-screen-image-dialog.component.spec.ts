import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenImageDialogComponent } from './full-screen-image-dialog.component';

describe('FullScreenImageDialogComponent', () => {
  let component: FullScreenImageDialogComponent;
  let fixture: ComponentFixture<FullScreenImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullScreenImageDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
