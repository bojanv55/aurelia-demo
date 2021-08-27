import {SomeApi} from "../../services/some-api";

export class SomeDemo2{
  private tekst: any = {};

  constructor(private someApi: SomeApi, private readonly host: Element) {

  }

  attaching = () => {
    const animation = this.host.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 10000 },
    );
    console.log(animation);
    return animation.finished;
  }

  detaching = () => {
    console.log("detaching");
    const animation = this.host.animate(
        [{ transform: 'translateX(-300px)' }, { transform: 'translateX(0)' }],
        { duration: 50000 },
    );
    return animation.finished;
  }

  async binding(): Promise<void> {
    this.tekst = await this.someApi.getSomeData(1);
  }
}