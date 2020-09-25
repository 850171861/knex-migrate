const Homework = /* GraphQL */`
  type Homework{
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
    # 标题
    title: String
    #截至时间
    end_at: Date
    #内容説明
    work_content: String
    #分數制
    fraction: Int
    #班級ID
    cls_id: String
    #老師ID
    schooluser_id: String
    #附件
    files: JSON
  }

  type a:String

  extend type Query {
    # 以班级id查询
    homework(id: ID!): Homework
  }

  # extend type Mutation {
  #   # # 建立新作业数据
  #   # createIntelligence(input: CreateHomeworkInput!): Homework
  #   # # 編輯新作业的数据
  #   # editIntelligence(input: EditHomeworkceInput!): Homework
  #   # # 刪除作业
  #   # deleteIntelligence(input: DeleteHomeworkInput!): Homework
  #  }
`

module.exports = Homework
