// Initializes the `RealEstateBroker` service on path `/real-estate-broker`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { RealEstateBroker } from './real-estate-broker.class';
import createModel from '../../models/real-estate-broker.model';
import hooks from './real-estate-broker.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'real-estate-broker': RealEstateBroker & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/real-estate-broker', new RealEstateBroker(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('real-estate-broker');

  service.hooks(hooks);
}
