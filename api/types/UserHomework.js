const UserHomework = /* GraphQL */`
  type UserHomework{
    # uuid
    id: ID!
    # 短id
    seqId: String
    # 建立時間
    createdAt: Date!
    # 修改時間
    modifiedAt: Date
    # 刪除時間
    deletedAt: Date
    # 連school_homework的id
    homework_id: String
    #學生ID
    schooluser_id: String
    #附件
    files:JSON
    #是否提交过作业，默认true
    is_submit:Boolean
    #該作業分數
    points:Int
    #評語
    evaluation:String
  }

  extend type Query { 
    # 以老师发布作业的id查詢
    UserHomework(id: String!): [UserHomework]
  }

  extend type Mutation {
    # # 建立新作业数据
    # createIntelligence(input: CreateUserHomeworkInput!): UserHomework
    # # 編輯新作业的数据
    # editIntelligence(input: EditUserHomeworkInput!): UserHomework
    # # 刪除作业
    # deleteIntelligence(input: DeleteUserHomeworkInput!): UserHomework
   }
`

module.exports = UserHomework
