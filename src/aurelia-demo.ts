import {SomeDemo} from "./components/some-demo/some-demo";
import {SomeDemo2} from "./components/some-demo2/some-demo2";

export class AureliaDemo{
  public components : [any] = [
      SomeDemo
  ];

  render = () => {
    this.components.push(SomeDemo2);
  }

  rimuv = () => {
    this.components.pop();
  }
}