
exports.up = function(knex) {
    return knex.schema.renameTable('users456', 'old_users')
};

exports.down = function(knex) {
   
};
