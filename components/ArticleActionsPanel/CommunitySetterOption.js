import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import withGuardian from '@components/HOC/withGuardian'

import { Option, OptionIcon, OptionTitle } from './styles'

const CommunitySetterOption = ({ onCommunitySet }) => (
  <React.Fragment>
    <Option onClick={onCommunitySet}>
      <OptionIcon src={`${ICON_CMD}/mirror.svg`} />
      <OptionTitle>镜像社区</OptionTitle>
    </Option>
  </React.Fragment>
)

CommunitySetterOption.propTypes = {
  // thread: T.string.isRequired,
  onCommunitySet: T.func.isRequired,
}

CommunitySetterOption.defaultProps = {}

export default withGuardian(CommunitySetterOption)
