/*
 *
 * ContributorList
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import AvatarAdder from '@containers/AvatarAdder'

import withGuardian from '@components/HOC/withGuardian'
import Popover from '@components/Popover'
import GithubUserCard from '@components/GithubUserCard'

import { Wrapper, AvatarLink, Avatar, CardWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ContributorList:index')

const ContributorList = ({ users, readOnly, addContributor }) => (
  <Wrapper>
    {users.map(user => (
      <Popover
        content={
          <CardWrapper>
            <GithubUserCard user={user} />
          </CardWrapper>
        }
        placement="bottom"
        trigger="hover"
        key={user.avatar}
      >
        <AvatarLink href={user.htmlUrl} target="_blank">
          <Avatar src={user.avatar} />
        </AvatarLink>
      </Popover>
    ))}

    {!readOnly && <AvatarAdder onConfirm={addContributor} />}
  </Wrapper>
)

ContributorList.propTypes = {
  users: T.arrayOf(
    T.shape({
      avatar: T.string,
      nickname: T.string,
      bio: T.string,
      company: T.string,
      location: T.string,
      htmlUrl: T.string,
    })
  ).isRequired,
  addContributor: T.func,
  readOnly: T.bool,
}

ContributorList.defaultProps = {
  addContributor: log,
  readOnly: false,
}

export default withGuardian(ContributorList)
