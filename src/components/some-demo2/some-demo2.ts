//import scss from './some-demo2.scss';
import {SomeApi} from "../../services/some-api";

export class SomeDemo2{
  private tekst: any = {};
  private stilovi = ['some-demo', 'some-demo--poslije'];
  //private stilovi: string = 'some-demo , some-demo--poslije';
  //private stilovi: string = scss.someDemo + ' , ' + scss.someDemoPoslije;

  constructor(private someApi: SomeApi, private readonly host: Element) {

  }

  dodajPoslije = () => {
    this.stilovi.pop();
    console.log(this.stilovi);
  }

  staviPoslije = () => {
    this.stilovi.push('some-demo--poslije');
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