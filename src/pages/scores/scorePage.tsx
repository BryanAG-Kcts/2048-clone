import { Header } from './header/header'
import { PostUser } from './postUser/postUser'
import { Table } from './table/table'
import { UserState } from './userState/userState'

export const ScorePage = () => {
  return (
    <>
      <Header />
      <PostUser />
      <Table />
      <UserState />
    </>
  )
}
