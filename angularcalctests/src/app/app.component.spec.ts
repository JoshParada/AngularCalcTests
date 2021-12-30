import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularcalctests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularcalctests');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.reset')?.textContent).toContain('C');
  });

  it('should get clicked Number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;    
    app.numPressed('7'); 
    expect(app.input).toEqual('7'); 
  })

  it('should get multiple clicked Numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance; 
    app.numPressed('7')   
    expect(app.input).toEqual('7'); 
    app.numPressed('5')   
    expect(app.input).toEqual('75');
  })

  it('should get operator clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.operatorPressed('*');
    expect(app.operand).toEqual('*');
  })

  it('should set value of first number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.numPressed('9');
    app.operatorPressed('*');
    expect(app.num1).toEqual(9);
  })

  it('should set input to ""', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.numPressed('9');
    app.operatorPressed('*');
    expect(app.input).toEqual('');
  })

  it('should set value of second number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.numPressed('9');
    app.operatorPressed('*');
    app.numPressed('78');
    app.equalPressed();
    expect(app.num2).toEqual(78);
  })

  it('should check for operator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.numPressed('9');
    app.equalPressed();
    expect(app.input).toEqual('ENTER OPERATOR');
  })

});
