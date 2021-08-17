import { handle } from '../ipc-router/router';

class Foo {
  @handle('foo')
  protected doSomething(test: string): void {
    console.log(test);
  }
}

export default new Foo();
