import style from './some-demo2.scss';
import {SomeApi} from "../../services/some-api";

export class SomeDemo2{
  private tekst: any = {};
  //private stilovi = [scss.someDemo, scss.someDemoPoslije];
  private someDemoStyles = [style.someDemo, style.someDemo_poslije];

  get someDemoCssClass () {
    return this.someDemoStyles.join(' ');
  }

  constructor(private someApi: SomeApi, private readonly host: Element) {

  }

  dodajPoslije = () => {
    console.log(style);
    console.log(style['some-demo']);
    this.someDemoStyles.pop();
    console.log(this.someDemoStyles);
  }

  staviPoslije = () => {
    this.someDemoStyles.push(style.someDemo_poslije);
    console.log(style.radni);
    console.log(style.radni__element)
    console.log(style.radni__element_modifiKator)
    console.log(style.radni__MOJE)
    console.log(this.someDemoStyles);
  }

  attaching = () => {
    const animation = this.host.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 15000 },
    );
    return animation.finished;
  }

  detaching = () => {
    const animation = this.host.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 15000 },
    );
    return animation.finished;
  }

  async binding(): Promise<void> {
    this.tekst = await this.someApi.getSomeData(1);
  }
}