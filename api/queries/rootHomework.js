const { UserError } = require('../../lib/UserError')

export default async (_, args, { user, loaders }) => {
  // return
  // * 權限管理：沒有登入就完全看不到
  // if (!user || !user.id) {
  //   return new UserError('You must be signed in to do this')
  // }

  // if (!args.id) {
  //   return new Error('etiology id 為空')
  // }
  console.log('a', '123')
  return null
}
