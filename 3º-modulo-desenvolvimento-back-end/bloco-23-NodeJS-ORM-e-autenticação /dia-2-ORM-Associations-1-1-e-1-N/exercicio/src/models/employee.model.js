module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'employees',
      underscored: true,
    });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };
  // A função Employee.associate = (models) => {} que criamos é onde declararemos as associações daquele model. No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id, o model Employee deve chamá-la de addresses (note a letra minúscula), como definido na propriedade as.

  return Employee;
};