module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', {
      filename: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      path: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mimetype: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    });
  
    File.associate = (models) => {
      File.belongsTo(models.User);
    };
  
    return File;
  };