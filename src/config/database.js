module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'apinode',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
