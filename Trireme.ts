import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';

export class Trireme extends NavalTransport {
  capacity(): number {
    return 2;
  }
}

export default Trireme;
