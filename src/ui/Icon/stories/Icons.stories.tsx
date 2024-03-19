import { Meta, StoryObj } from '@storybook/react'

import Typography from '@ui/Typography'
import * as allIcons from '..'
import { CATEGORY } from '../constants'
import { SIconsWrapper, SIconThumbnail, SIconItem, SEntitySection } from './styled'

const { default: MainIcon, ...icons } = allIcons

const meta: Meta<typeof MainIcon> = {
  title: 'UI-kit/Icon',
  component: MainIcon,
  args: {
    name: 'Qencode',
    width: '128px',
    height: '128px',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const iconCategories = [CATEGORY.LOGO, CATEGORY.SYMBOL]

type CategoryUnion = (typeof CATEGORY)[keyof typeof CATEGORY]

interface SectionProps {
  title: string
  category: CategoryUnion
  size: '16px' | '32px'
}

const Section = ({ title, category, size }: SectionProps) => (
  <SEntitySection>
    <Typography color="grey" size="md" gutterBottom={1}>
      {title.toUpperCase()}
    </Typography>
    <SIconsWrapper>
      {Object.entries(icons)
        .filter(([, Icon]) => (Icon.category satisfies CategoryUnion) === category)
        .map(([iconName, Icon]) => (
          <SIconThumbnail key={`${iconName}-${category}`}>
            <SIconItem>
              <Icon name={iconName} height={size} width={size} />
              <span>{iconName}</span>
            </SIconItem>
          </SIconThumbnail>
        ))}
    </SIconsWrapper>
  </SEntitySection>
)

export const Main: Story = {
  args: {
    name: 'Qencode',
    width: '128px',
    height: '128px',
  },
}

export const Icon16: Story = {
  render: () => (
    <>
      {iconCategories.map((category) => (
        <Section key={category} title={category} category={category} size="16px" />
      ))}
    </>
  ),
  name: '16px',
}

export const Icon32: Story = {
  render: () => (
    <>
      {iconCategories.map((category) => (
        <Section key={category} title={category} category={category} size="32px" />
      ))}
    </>
  ),
  name: '32px',
}
