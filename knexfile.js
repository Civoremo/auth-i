// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './authUsers.sqlite3'
    },
    useDefaultAsNull: true,
  },

};
