import { Application } from "../../declarations";
import { SequelizeServiceOptions, Service } from "feathers-sequelize";

export class Users extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
