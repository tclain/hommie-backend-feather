import { Application } from "../declarations";
import { Sequelize, DataTypes } from "sequelize";

export default function(app: Application) {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const Model = sequelizeClient.define(
    "users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM("admin", "designer", "anonymous"),
        allowNull: false,
        defaultValue: "designer"
      }
    },
    {
      hooks: {
        beforeCount(options: any) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  (Model as any).associate = function(models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };
  return Model;
}
