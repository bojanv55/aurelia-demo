import {SomeApi} from "../../services/some-api";

export class SomeDemo2{
  private tekst: any = {};

  constructor(private someApi: SomeApi, private readonly host: Element) {

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