import { Application, ServiceTypes } from "../declarations";
import { Paginated } from "@feathersjs/feathers";

async function hasNoData<Record>(
  app: Application,
  serviceName: keyof ServiceTypes
) {
  const { total } = (await app.service(serviceName as any).find({
    query: {
      $limit: 0
    }
  })) as Paginated<Record>;

  return total === 0;
}

export const setupSeeds = async (app: Application) => {
  const users = app.service("users");

  if (hasNoData(app, "users")) {
    users.create({
      email: "admin@hommie.com",
      password: "admin123"
    });
  }
};
