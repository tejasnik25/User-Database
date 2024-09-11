module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
      token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  
    Session.associate = (models) => {
      Session.belongsTo(models.User);
    };
  
    return Session;
  };