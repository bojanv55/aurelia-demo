import scss from './some-demo2.module.scss';
//import * as scss from './some-demo2.module.scss';
import {SomeApi} from "../../services/some-api";

export class SomeDemo2{
  private tekst: any = {};
  //private stilovi = [scss.someDemo, scss.someDemoPoslije];
  private stilovi = [scss.someDemo, scss.someDemo_poslije];

  get cStilovi () {
    return this.stilovi.join(' ');
  }

  constructor(private someApi: SomeApi, private readonly host: Element) {

  }

  dodajPoslije = () => {
    console.log(scss);
    console.log(scss['some-demo']);
    this.stilovi.pop();
    console.log(this.stilovi);
  }

  staviPoslije = () => {
    this.stilovi.push(scss.someDemo_poslije);
    console.log(scss.radni);
    console.log(scss.radni__element)
    console.log(scss.radni__element_modifiKator)
    console.log(scss.radni__MOJE)
    console.log(this.stilovi);
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