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
              result
            ) => {

              return response.send(
                result
              );
            }
          );
      }
    )

    .put(
      '/:id',
      (
        request,
        response
      ) => {

        return db.Post
          .update(
            request.body,
            {
              where: {
                id: request.params.id
              },
              returning: true
            }
          )
          .then(
            (
              result
            ) => {

              return response.send(
                result[
                  1
                ][
                  0
                ]
              );
            }
          );
      }
    )

    .delete(
      '/:id',
      (
        request,
        response
      ) => {

        return db.Post
          .destroy(
            {
              where: {
                id: request.params.id
              }
            }
          )
          .then(
            () => {

              return response.send(
                {
                  id: request.params.id
                }
              );
            }
          );
      }
    )
    
    .get(
      '/:id',
      (
        request,
        response
      ) => {

        return db.Post
          .findOne(
            {
              where: {
                id: request.params.id
              }
            }
          )
          .then(
            (
              result
            ) => {

              return response.send(
                result
              );
            }
          );
      }
    )

    .get(
      '/',
      (
        request,
        response
      ) => {

        return db.Post
          .findAll(
            {
              where: {}
            }
          )
          .then(
            (
              result
            ) => {

              return response.send(
                result
              );
            }
          );
      }
    );
};
