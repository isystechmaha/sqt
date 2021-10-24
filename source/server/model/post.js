'use strict';

import sequelize, {
  DataTypes
} from 'sequelize';


export default {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: (
      sequelize.Sequelize.literal(
        `
          'P' || nextval('"PostsIdSeq"')
        `
          .trim()
      )
    )
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
};
