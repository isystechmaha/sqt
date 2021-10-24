'use strict';

import express from 'express';

import db from '~/models';
import postRouterGet from './router/post';

(
  async () => {

    const port = (
      process.env.PORT ||
      process.env.npm_package_config_PORT
    );

    return express()
      .use(
        express.json()
      )
      .use(
        '/post',
        postRouterGet(
          db
        )
      )
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
