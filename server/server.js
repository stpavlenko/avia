const app = require('./index');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
