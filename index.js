var knexMigrate = require('knex-migrate') 

// It has following signature:
// knexMigrate(command: String, flags: Object, progress: Function)

async function run() {
  // Action can be: migrate, revert. Migration is migration name. For example:
  // Doing migrate on 20170427093232_add_users
  // Doing revert on 20170427093232_add_users
  const log = ({ action, migration }) =>
    console.log('Doing ' + action + ' on ' + migration)

  await knexMigrate('up', { to: '20170727093232' }, log)
  await knexMigrate('down', { step: 2 }, log)
  await knexMigrate('down', { to: 0 }, log)
  await knexMigrate('up', {}, log)
  await knexMigrate('redo', {}, log)
  await knexMigrate('rollback', {}, log)
  await knexMigrate('redo', {}, log)
  await knexMigrate('down', { to: 0 }, log)
}

run()