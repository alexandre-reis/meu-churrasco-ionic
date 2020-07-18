import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabChurrascoCadastroPage } from './tab-churrasco-cadastro.page';

describe('TabChurrascoCadastroPage', () => {
  let component: TabChurrascoCadastroPage;
  let fixture: ComponentFixture<TabChurrascoCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChurrascoCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabChurrascoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
