import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabChurrascoDetalhePage } from './tab-churrasco-detalhe.page';

describe('TabChurrascoDetalhePage', () => {
  let component: TabChurrascoDetalhePage;
  let fixture: ComponentFixture<TabChurrascoDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChurrascoDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChurrascoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
