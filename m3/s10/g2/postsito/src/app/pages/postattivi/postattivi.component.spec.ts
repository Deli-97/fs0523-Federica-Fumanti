import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostattiviComponent } from './postattivi.component';

describe('PostattiviComponent', () => {
  let component: PostattiviComponent;
  let fixture: ComponentFixture<PostattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostattiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
