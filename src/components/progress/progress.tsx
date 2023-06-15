import React, { ReactElement } from 'react';

import { ProgressStyled, ProgressBarStyled } from '@/components/progress/progressStyled';
import { SvgChecked } from '@/components/svg/svgStore';

import { Spacer } from '@/styles/layout';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function Progress({ color = variable.color.green, progressPercent = 0 }): ReactElement {
  return progressPercent < 100 ? (
    <>
      <P>{`${progressPercent}%`}</P>

      <Spacer height={variable.space.spacingXXS} />

      <ProgressStyled>
        <ProgressBarStyled backgroundColor={color} width={`${progressPercent}%`} />
      </ProgressStyled>
    </>
  ) : (
    <SvgChecked fill={color} height="12px" />
  );
}
