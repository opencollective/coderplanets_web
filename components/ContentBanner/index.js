/*
 *
 * ContentBanner
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import { buildLog } from '@utils'
import DotDivider from '@components/DotDivider'

import {
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  MarkTag,
} from './styles'

import ReactionNumbers from './ReactionNumbers'

/* eslint-disable-next-line */
const log = buildLog('c:ContentBanner:index')

// TODO: add a Loading effect
const ContentBanner = ({ data, middleNode }) => {
  const isRefined = R.contains('refined', R.pluck('title', data.tags))

  return (
    <BannerContainer>
      {!R.isNil(data.id) && (
        <BannerContentWrapper>
          <PostBrief>
            <Title>{data.title}</Title>
            <React.Fragment>
              {!R.isEmpty(middleNode) && <div>{middleNode}</div>}
            </React.Fragment>
            <Desc>
              {isRefined ? <MarkTag>精华</MarkTag> : <div />}
              <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
              <DotDivider />
              字数: {data.length}
            </Desc>
          </PostBrief>
          <ReactionNumbers data={data} />
        </BannerContentWrapper>
      )}
    </BannerContainer>
  )
}

ContentBanner.propTypes = {
  data: T.shape({
    id: T.string,
    title: T.string,
    insertedAt: T.string,
    updatedAt: T.string,
    views: T.number,
    favoritedCount: T.number,
    starredCount: T.number,
    viewerHasFavorited: T.bool,
    viewerHasStarred: T.bool,
  }),
  middleNode: T.oneOfType([T.string, T.node]),
}

ContentBanner.defaultProps = {
  data: {
    id: '',
    title: '',
    views: 0,
    favoritedCount: -1,
    starredCount: -1,
    viewerHasFavorited: false,
    viewerHasStarred: false,
  },
  middleNode: '',
}

export default ContentBanner
