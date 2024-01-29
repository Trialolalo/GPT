module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        }
      }
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        isEmail: {
          msg: 'Por favor, rellena el campo "Email" con un email válido.'
        },
        isUnique: function (value, next) {
          const self = this
          User.findOne({ where: { email: value } }).then(function (user) {
            if (user && self.id !== user.id) {
              return next('Ya existe un usuario con ese email.')
            }
            return next()
          }).catch(function (err) {
            return next(err)
          })
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Contraseña".'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  User.associate = function (models) {

  }

  return User
}
