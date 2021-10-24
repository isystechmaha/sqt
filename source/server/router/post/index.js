'use strict';

import {
  Router
} from 'express';

export default (
  db
) => {

  return new Router()

    .post(
      '/',
      (
        request,
        response
      ) => {

        return db.Post
          .create(
            request.body
          )
          .then(
            (
              post
            ) => {

              return response.send(
                post
              );
            }
          );
      }
    );
};
