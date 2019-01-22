
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl)  {
        tbl.increments();
        tbl.string('username', 128).notNullable();
        tbl.string('password', 128).notNullable();
        tbl.timestamps(true, true);
        tbl.unique('username', 'uq_users_username');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
