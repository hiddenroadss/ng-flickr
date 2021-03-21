import { ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Photo } from 'src/app/search/search.service';

import { BookmarksListComponent } from './bookmarks-list.component';

describe('BookmarksListComponent', () => {
  let component: BookmarksListComponent;
  let fixture: ComponentFixture<BookmarksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain images container', () => {
    const containerDiv = fixture.debugElement.query(By.css('.images-container'));
    expect(containerDiv.nativeElement).toBeTruthy();
  });

  it('should show no list item when no bookmarks are available', () => {
    const listItem = fixture.debugElement.queryAll(By.css('.image-card'));
    expect(listItem.length).toBe(0);
  });

  it('should show one list item when we have 1 bookmark', () => {
    component.bookmarked$ = new BehaviorSubject([{id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'}]);
    fixture.detectChanges();
    const listItems = fixture.debugElement.queryAll(By.css('.images-card'));
    expect(listItems.length).toBe(1);
  });

  it('should show 10 list items when we have 10 bookmarks', () => {
    const bookmarks: Photo[] = [];
    for (let i = 0; i < 10; i++) {
      bookmarks.push({id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'});
    }
    component.bookmarked$ = new BehaviorSubject(bookmarks);
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('.images-card'));
    expect(listItems.length).toBe(10);
  });

  it('should contain 10 remove buttons, 1 per bookmark', () => {
    const bookmarks: Photo[] = [];
    for (let i = 0; i < 10; i++) {
      bookmarks.push({id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'});
    }
    component.bookmarked$ = new BehaviorSubject(bookmarks);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(10);
  });

  it('should create an image src from Photo object', () => {
    component.bookmarked$ = new BehaviorSubject([{id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'}]);
    const bookmark = {id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'};
    fixture.detectChanges();
   
    const image = fixture.debugElement.query(By.css('img'));
    const nativeImage: HTMLImageElement = image.nativeElement;
    const url = `https://live.staticflickr.com/${bookmark.server}/${bookmark.id}_${bookmark.secret}.jpg`;
    expect(nativeImage.src).toBe(url);
  });

  it('Image description should be initially hidden', () => {
    component.bookmarked$ = new BehaviorSubject([{id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'}]);
    fixture.detectChanges();

    const description = fixture.debugElement.query(By.css('.image-description'));
    const descriptionNative: HTMLDivElement = description.nativeElement;
    const styles = window.getComputedStyle(descriptionNative);
    expect(styles.visibility).toBe('hidden');
  });

  // it('Image description should appear on mouseenter', () => {
  //   component.bookmarked$ = new BehaviorSubject([{id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'}]);
  //   fixture.detectChanges();

  //   const imageCard = fixture.debugElement.query(By.css('.images-card'));
  //   imageCard.triggerEventHandler('mouseenter', null);

  //   fixture.detectChanges();
  
  //   const description = fixture.debugElement.query(By.css('.image-description'));
  //   const descriptionNative: HTMLDivElement = description.nativeElement;
  //   const styles = window.getComputedStyle(descriptionNative);
  
  //   expect(styles.visibility).toBe('visible');
  // })
  
});
