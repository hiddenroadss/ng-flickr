import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, from} from 'rxjs';

import { ImageListComponent } from './image-list.component';
import { Photo, SearchService } from '../search.service';
import { By } from '@angular/platform-browser';


describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  let searchServiceMock: any;

  beforeEach(async () => {
    searchServiceMock = jasmine.createSpyObj('SearchService', {}, 
      {pagesOutput: of([{id: '50655259358', owner: 'asdasd', secret: 'f51d54361b', server: '65535', farm: 222, title: 'Japanise'}])}
      );

    await TestBed.configureTestingModule({
      declarations: [ ImageListComponent ],
      imports: [],
      providers: [
        {provide: SearchService, useValue: searchServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render image container if at least 1 image is present', () => {
    const imagesContainer = fixture.debugElement.query(By.css('.images-container'));
    expect(imagesContainer).toBeTruthy();
  });

  it('should render 1 image card if 1 image is present', () => {
    const imageCard = fixture.debugElement.queryAll(By.css('.images-card'));
    expect(imageCard.length).toBe(1);
  });

  it('should render paginator if at least 1 image is present', () => {
    const paginator = fixture.debugElement.query(By.css('app-paginator'));
    expect(paginator).toBeTruthy();
  });

  it('should render 1 img tag if 1 image is present', () => {
    const imgs = fixture.debugElement.queryAll(By.css('img'));
    expect(imgs.length).toBe(1);
  });

  it('should create img src based on Photo object', () => {
    const img = fixture.debugElement.query(By.css('img'));
    const imgNative: HTMLImageElement = img.nativeElement;

    let obsImg: Photo;
    searchServiceMock.pagesOutput.subscribe((image) => {
      obsImg = image[0];
    })
    
    const url = `https://live.staticflickr.com/${obsImg.server}/${obsImg.id}_${obsImg.secret}.jpg`;
    expect(imgNative.src).toBe(url);
  });

  it('should not display image description by default', () => {
    const imageDescription = fixture.debugElement.query(By.css('.image-description'));
    const styles = window.getComputedStyle(imageDescription.nativeElement);
    expect(styles.visibility).toBe('hidden');
  });

  it('should contain 1 button when 1 image is present', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(1); 
  });

  it('should display Bookmark text on the button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const buttonNative: HTMLButtonElement = button.nativeElement;
    expect(buttonNative.innerHTML).toBe('Bookmark');
  })
});
