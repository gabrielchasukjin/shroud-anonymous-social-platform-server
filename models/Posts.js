module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Associate with comments
    Posts.associate = (models) => {
    // if original post deleted -> all comments associated will be deleted
        Posts.hasMany(models.Comments, {
          onDelete: "cascade",
        });
      };
    return Posts;
};
