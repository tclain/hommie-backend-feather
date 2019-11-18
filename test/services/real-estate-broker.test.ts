import app from '../../src/app';

describe('\'RealEstateBroker\' service', () => {
  it('registered the service', () => {
    const service = app.service('real-estate-broker');
    expect(service).toBeTruthy();
  });
});
