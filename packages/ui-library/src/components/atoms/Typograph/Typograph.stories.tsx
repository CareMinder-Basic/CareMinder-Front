import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typograph';
import React from 'react';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2', 'subtitle1', 'subtitle2', 'caption', 'overline', 'title'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'disabled', 'white', 'destructive'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    fontSize: {
      control: 'number',
      description: '폰트 크기 (px 단위로 입력, 자동으로 rem으로 변환)',
    },
    fontWeight: {
      control: 'number',
      description: '폰트 두께 (100-900)',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 타이포그래피',
    variant: 'body1',
  },
};

export const CustomFontSize: Story = {
  args: {
    children: '사용자 정의 폰트 크기와 두께',
    fontSize: 24,
    fontWeight: 700,
  },
};

export const PriorityExample: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">
        기본 h1 variant (변형 스타일만 적용)
      </Typography>
      <Typography variant="h1" fontSize={24}>
        h1 + fontSize 24px (fontSize가 우선 적용)
      </Typography>
      <Typography variant="h1" fontWeight={400}>
        h1 + fontWeight 400 (fontWeight가 우선 적용)
      </Typography>
      <Typography variant="h1" fontSize={24} fontWeight={400}>
        h1 + fontSize 24px + fontWeight 400 (둘 다 우선 적용)
      </Typography>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="title">Title</Typography>
    </div>
  ),
};

export const Text: Story = {
  args: {    
    children: '기본 텍스트(유동)',
    fontSize: 24,
    fontWeight: 400,
  },
};

export const Heading1: Story = {
  args: {    
    children: '제목 1 (Heading 1)',
    fontSize: 24,
    fontWeight: 700,
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: '제목 2 (Heading 2)',
    fontSize: 20,
    fontWeight: 700,
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: '본문 1 텍스트입니다. 일반적인 본문에 사용됩니다.',
    fontSize: 16,
    fontWeight: 400,
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: '본문 2 텍스트입니다. 작은 본문에 사용됩니다.',
    fontSize: 14,
    fontWeight: 400,
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    color: 'secondary',
    children: '캡션 텍스트입니다. 부가 설명에 사용됩니다.',
    fontSize: 12,
    fontWeight: 400,
  },
};

export const AllTypography: Story = {
  render: () => (
    <div className="space-y-4 p-4 max-w-2xl">
      <Typography variant="title" fontSize={32} fontWeight={700}>타이틀 텍스트</Typography>
      <Typography variant="h1" fontSize={24} fontWeight={700}>제목 1 (Heading 1)</Typography>
      <Typography variant="h2" fontSize={20} fontWeight={700}>제목 2 (Heading 2)</Typography>
      <Typography variant="h3" fontSize={18} fontWeight={600}>제목 3 (Heading 3)</Typography>
      <Typography variant="h4" fontSize={16} fontWeight={600}>제목 4 (Heading 4)</Typography>
      <Typography variant="h5" fontSize={14} fontWeight={600}>제목 5 (Heading 5)</Typography>
      
      <div className="h-8" />
      
      <Typography variant="subtitle1" fontSize={18} fontWeight={500}>부제목 1 (Subtitle 1)</Typography>
      <Typography variant="body1" fontSize={16} fontWeight={400}>
        본문 1 텍스트입니다. 일반적인 본문에 사용됩니다. 가독성이 좋고 깔끔한 디자인을 제공합니다.
      </Typography>
      
      <Typography variant="subtitle2" fontSize={16} fontWeight={500}>부제목 2 (Subtitle 2)</Typography>
      <Typography variant="body2" fontSize={14} fontWeight={400}>
        본문 2 텍스트입니다. 작은 본문에 사용됩니다. 부가적인 정보를 표시할 때 적합합니다.
      </Typography>
      
      <Typography variant="caption" fontSize={12} fontWeight={400} color="secondary">
        캡션 텍스트입니다. 부가 설명에 사용됩니다.
      </Typography>
      
      <Typography variant="overline" fontSize={12} fontWeight={600} color="primary">
        오버라인 텍스트
      </Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>동적 폰트 크기</Typography>
      <Typography fontSize={40} fontWeight={700}>40px 크기의 텍스트</Typography>
      <Typography fontSize={28} fontWeight={500}>28px 크기의 텍스트</Typography>
      <Typography fontSize={20} fontWeight={400}>20px 크기의 텍스트</Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>색상 변형</Typography>
      <Typography fontSize={16} fontWeight={400} color="default">기본 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="primary">주요 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="secondary">보조 텍스트 색상</Typography>
      <Typography fontSize={16} fontWeight={400} color="disabled">비활성화된 텍스트 색상</Typography>
      <div className="bg-gray-800 p-2 mt-2">
        <Typography fontSize={16} fontWeight={400} color="white">흰색 텍스트 색상</Typography>
      </div>
      <Typography fontSize={16} fontWeight={400} color="destructive">경고 텍스트 색상</Typography>
      
      <div className="h-8" />
      
      <Typography variant="h3" fontSize={18} fontWeight={600}>정렬 옵션</Typography>
      <Typography fontSize={16} fontWeight={400} align="left">왼쪽 정렬 텍스트</Typography>
      <Typography fontSize={16} fontWeight={400} align="center">가운데 정렬 텍스트</Typography>
      <Typography fontSize={16} fontWeight={400} align="right">오른쪽 정렬 텍스트</Typography>
    </div>
  ),
};