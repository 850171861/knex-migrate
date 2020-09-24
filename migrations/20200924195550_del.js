
exports.up = function(knex) {
    return knex.schema
    .dropTable("content");
};

exports.down = function(knex) {
  
};
