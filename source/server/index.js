'use strict';

import express from 'express';

import dbGet from './fn/dbGet';

(
  async () => {

    const port = (
      process.env.PORT ||
      process.env.npm_package_config_PORT
    );

    const db = await dbGet();

    db.models.Post
      .create({text: 'maha'});

    return express()
      .get(
        '*',
        (
          request,
          response
        ) => {

          return response.send(
            {
              title: process.env.npm_package_name
            }
          );
        }
      )
      .listen(
        port,
        () => {

          // eslint-disable-next-line no-console
          console.log(
            `
              listening at http://localhost:${
                port
              }
            `
              .trim()
          );

          return null;
        }
      );
  }
)();
