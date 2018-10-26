import React from 'react'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  Title,
  Didiver,
  Option,
  OptionIcon,
  OptionText,
} from './styles/setting_menu'

const SettingMenu = () => (
  <Wrapper>
    <Title>视图显示</Title>
    <Option>
      <OptionText>列表视图</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
    <Option>
      <OptionText active>摘要视图</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active />
    </Option>
    <Didiver />
    <Title>阅读标记</Title>
    <Option>
      <OptionText>已读标记</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
    <Option>
      <OptionText active>不显标记</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active />
    </Option>
    <Didiver />
    <Title>显示密度</Title>
    <Option>
      <OptionText>20条 / 页</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
    <Option>
      <OptionText>25条 / 页</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} active />
    </Option>
    <Option>
      <OptionText>30条 / 页</OptionText>
      <OptionIcon src={`${ICON_CMD}/check2.svg`} />
    </Option>
  </Wrapper>
)

export default SettingMenu
