import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabChurrascosPage } from './tab-churrascos.page';

describe('TabChurrascosPage', () => {
  let component: TabChurrascosPage;
  let fixture: ComponentFixture<TabChurrascosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChurrascosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChurrascosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
