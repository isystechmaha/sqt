'use strict';

import {
  Sequelize
} from 'sequelize';

import postModel from '../model/post';

export default async () => {

  const pgUrl = process.env.npm_package_config_PG_URL;

  const sequelize = new Sequelize(
    pgUrl,
    {
      dialect: 'postgres',
      logging: false
    }
  );

  sequelize.define(
    'Post',
    postModel
  );

  await sequelize.authenticate()
    .then(
      () => {

        // eslint-disable-next-line no-console
        console.log(
          `
            dbGet: ${
              pgUrl
            }
          `
            .trim()
        );

        return null;
      }
    );

  await sequelize.sync();

  return sequelize;
};
