'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }

  Post.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: (
          sequelize.Sequelize.literal(
            `
              'P' || lpad(nextval('"PostsIdSeq"')::text, 10, '0')
            `
          )
        )
      },
      text: {
        type: DataTypes.STRING
      }
    }, 
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};
