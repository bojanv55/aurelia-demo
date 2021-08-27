import {SomeApi} from "../../services/some-api";
import {inject} from "aurelia";

@inject(SomeApi)
export class SomeDemo2{
  private tekst: any = {};

  constructor(private someApi: SomeApi) {
  }

  async binding(): Promise<void> {
    this.tekst = await this.someApi.getSomeData(1);
  }
}