import {IHttpClient} from "aurelia";

export class SomeApi{
  constructor(@IHttpClient private http: IHttpClient) {
    this.http.configure(c => {
      c.withBaseUrl("https://jsonplaceholder.typicode.com/");
      return c;
    })
  }

  async getSomeData(id: number) : Promise<unknown> {
    try{
      const req = await this.http.fetch(`todos/${id}`);
      return req.json();
    }
    catch (e){
      return e;
    }
  }
}