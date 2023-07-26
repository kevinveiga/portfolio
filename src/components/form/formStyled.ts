import { Form as Unform } from '@unform/web';
import styled, { css, IActiveStyled, IInputStyled, IStyledSystem, ITextStyled } from 'styled-components';
import { layout, position, space, typography } from 'styled-system';

import { variable } from '@/styles/variable';

const input = css<IInputStyled>`
  ${layout};
  ${space};
  ${typography};

  background-clip: content-box;
  border: 1px solid ${({ borderColor, theme }): string => borderColor || theme.borderColor.primary};
  ${({ borderRadius }): string | undefined =>
    borderRadius === undefined ? `border-radius: ${variable.layout.borderRadiusPrimary}` : undefined};
  box-shadow: inset 0 0 0 100px ${({ backgroundColor, theme }): string => backgroundColor || theme.inputBgColor.primary};
  color: ${({ color, theme }): string => color || theme.textColor.primary};
  ${({ cursor }): string | undefined => (cursor ? `cursor ${cursor}` : undefined)};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};
  ${({ height }): string | undefined => (height === undefined ? `height: ${variable.layout.inputHeight}` : undefined)};
  ${({ pb }): string | undefined =>
    pb === undefined ? `padding-bottom: ${variable.layout.inputPaddingY}` : undefined};
  ${({ pl }): string | undefined => (pl === undefined ? `padding-left: ${variable.layout.inputPaddingX}` : undefined)};
  ${({ pr }): string | undefined => (pr === undefined ? `padding-right: ${variable.layout.inputPaddingX}` : undefined)};
  ${({ pt }): string | undefined => (pt === undefined ? `padding-top: ${variable.layout.inputPaddingY}` : undefined)};
  table-layout: fixed;
  text-indent: ${({ textIndent }): string => textIndent || 'unset'};
  text-overflow: ellipsis;
  transition:
    border ${variable.animation.transition},
    color ${variable.animation.transition};
  ${({ width }): string | undefined => (width === undefined ? 'width: 100%' : undefined)};

  &:hover {
    border: 1px solid ${variable.color.primary};
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ color, theme }): string => color || theme.textColor.primary};
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  }

  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: ${({ colorPlaceholder, theme }): string => colorPlaceholder || theme.textColor.secondary};
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
    ${({ fontWeight }): string | undefined =>
      fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};
  }

  ${({ disabled }): any =>
    disabled === true
      ? css`
          color: ${variable.color.gray};
        `
      : undefined}
`;

const inputLabel = css<IInputStyled>`
  ${({ colorLabel, label }): any =>
    label
      ? css`
          + label {
            color: ${colorLabel};
            pointer-events: none;
            position: absolute;
            top: 10px;
            transition:
              font-size ${variable.animation.transition},
              top ${variable.animation.transition};
          }

          &:focus {
            + label {
              font-size: 10px;
              top: -3px;
            }
          }
        `
      : undefined};

  ${({ invalid, label, valid }): any =>
    label && (invalid || valid)
      ? css`
          + label {
            font-size: 10px;
            top: -3px;
          }
        `
      : undefined};

  &:-webkit-autofill {
    + label {
      font-size: 10px;
      top: -3px;
    }
  }
`;

export const FormStyled = styled(Unform as any)<IStyledSystem>`
  ${layout};

  width: 100%;
  z-index: 1;
`;

export const InputStyled = styled.input.attrs<IInputStyled>(({ invalid }) => {
  return {
    'data-invalid': invalid ? true : undefined
  };
})<IInputStyled>`
  ${input};
  ${inputLabel};

  ${({ invalid, validation }): string | undefined =>
    invalid && validation ? `border: 1px solid ${variable.color.alert}` : undefined};
  ${({ valid, validation }): string | undefined =>
    valid && validation ? `border: 1px solid ${variable.color.primary}` : undefined};
`;

export const InputCheckboxRadioStyled = styled.input<IInputStyled>`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  visibility: hidden;
  z-index: -1;

  + label {
    cursor: pointer;
    user-select: none;

    &::before {
      background-color: ${variable.color.grayLight4};
      border: 2px solid ${variable.color.grayLight4};
      border-radius: ${variable.layout.borderRadiusPrimary};
      box-shadow:
        inset 0 0 0 0 ${variable.color.grayDark},
        0 0 0 1px ${variable.color.grayDark};
      content: ' ';
      display: inline-block;
      height: 12px;
      margin-right: ${variable.space.spacingXS};
      margin-top: -4px;
      transition: box-shadow ${variable.animation.transition};
      vertical-align: middle;
      width: 12px;
    }
  }

  &:checked {
    + label {
      &::before {
        box-shadow:
          inset 0 0 0 10px ${variable.color.primary},
          0 0 0 1px ${variable.color.primary};
      }
    }
  }
`;

export const InputCheckboxRadioButtonStyled = styled.input<IInputStyled>`
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 0.1px;
  visibility: hidden;
  z-index: -1;

  + label {
    background-color: transparent;
    border: 2px solid ${variable.color.grayDark};
    border-radius: ${variable.layout.borderRadiusPrimary};
    cursor: pointer;
    padding: 15px 20px;
    transition:
      background-color ${variable.animation.transition},
      border ${variable.animation.transition},
      color ${variable.animation.transition};
    user-select: none;

    &:hover {
      background-color: ${variable.color.primary};
      border: 2px solid ${variable.color.primary};
      color: ${variable.color.grayLight4};
    }
  }

  &:checked {
    + label {
      background-color: ${variable.color.success};
      border: 2px solid ${variable.color.success};
      color: ${variable.color.grayLight4};
    }
  }
`;

export const InputContainerStyled = styled.div`
  height: auto;
  width: 100%;

  > button,
  > svg {
    line-height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    z-index: 2;
  }

  > svg {
    pointer-events: none;
  }
`;

export const InputDecrementIncrementContainerStyled = styled.div`
  height: auto;
  width: 100%;

  > button {
    &:first-of-type {
      > svg {
        transform: rotate(180deg);
      }
    }
  }

  > button {
    line-height: 0;
    position: absolute;
    z-index: 2;
  }

  > svg {
    pointer-events: none;
  }
`;

export const InputFileStyled = styled.input.attrs<IInputStyled>(({ invalid }) => {
  return {
    'data-invalid': invalid ? true : undefined
  };
})<IInputStyled>``;

export const InputRadioStyled = styled(InputCheckboxRadioStyled)`
  + label {
    &::before {
      border-radius: 50%;
    }
  }
`;

export const LabelStyled = styled.label<ITextStyled>`
  ${layout};
  ${position};
  ${space};
  ${typography};

  color: ${({ color, theme }): string => color || theme.textColor.primary};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ py }): string | undefined =>
    py === undefined
      ? `padding-bottom: ${variable.space.spacingXS}; padding-top: ${variable.space.spacingXS}`
      : undefined};
  z-index: 1;

  ${({ textTransform, textTransformFirstLetter }): any =>
    textTransform
      ? `text-transform: ${textTransform}`
      : css`
          &::first-letter {
            text-transform: ${textTransformFirstLetter ?? 'capitalize'};
          }
        `};
`;

export const LabelFileStyled = styled.label<IStyledSystem>`
  ${layout};
  ${position};
  ${space};
  ${typography};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
  border-color: ${({ borderColor, theme }): string => borderColor || theme.borderColor.primary};
  ${({ borderRadius }): string | undefined =>
    borderRadius === undefined ? `border-radius: ${variable.layout.borderRadiusPrimary}` : undefined};
  border-style: dashed;
  border-width: 2px;
  color: ${({ color, theme }): string => color || theme.textColor.primary};
  cursor: pointer;
  min-height: ${variable.layout.buttonHeight};
  padding: ${variable.space.spacingMD} ${variable.space.spacingSM};
  text-align: center;
  transition:
    background-color ${variable.animation.transition},
    color ${variable.animation.transition};

  &:hover {
    background-color: ${({ theme }): string => theme.bgColor.secondary};
  }
`;

export const LabelFileThumbnailStyled = styled(LabelFileStyled)`
  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  border-color: ${({ borderColor, theme }): string => borderColor || theme.svgColor.primary};
  border-width: 1px;
`;

export const LabelPlaceholderStyled = styled.label<ITextStyled>`
  ${layout};
  ${position};
  ${space};
  ${typography};

  color: ${({ color, theme }): string => color || theme.textColor.secondary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};
  z-index: 1;
`;

export const SelectStyled = styled.select.attrs<IInputStyled>(({ invalid }) => {
  return {
    'data-invalid': invalid ? true : undefined
  };
})<IInputStyled>`
  ${input};
  ${inputLabel};

  color: ${({ color, theme }): string => color || theme.textColor.secondary};

  &.has-value {
    color: ${({ color, theme }): string => color || theme.textColor.primary};
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  }

  option {
    background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.inputBgColor.primary};
  }

  ${({ invalid, validation }): string | undefined =>
    invalid && validation ? `border: 1px solid ${variable.color.alert}` : undefined};
  ${({ valid, validation }): string | undefined =>
    valid && validation ? `border: 1px solid ${variable.color.success}` : undefined};
`;

export const SelectOptionsCustomStyled = styled.div<IActiveStyled>`
  left: 0;
  position: absolute;
  transform: ${({ active }): string => (active ? 'scaleY(100%)' : 'scaleY(0)')};
  transform-origin: 0 0;
  transition: transform ${variable.animation.transitionFast};
  top: ${variable.layout.inputHeight};
  z-index: 6;

  > ul {
    background-color: ${({ theme }): string => theme.bgColor.primary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    box-shadow: ${variable.layout.boxShadowSecondary};
    min-width: ${({ width }): number | string | undefined => width || '100%'};

    > li {
      border-bottom: 1px solid ${({ theme }): string => theme.borderColor.primary};

      &:last-of-type {
        border-bottom: none;
      }

      > button {
        padding: 14px ${variable.space.spacingMD};
        text-align: left;
        width: 100%;

        &:hover {
          p,
          span {
            color: ${variable.color.primary};
          }
        }

        p,
        span {
          color: ${({ theme }): string => theme.textColor.secondary};
          transition: color ${variable.animation.transition};
        }
      }
    }
  }
`;

export const TextareaStyled = styled.textarea<IInputStyled>`
  ${input};
  ${inputLabel};

  height: auto;
  ${({ minHeight }): string | undefined => (minHeight === undefined ? 'min-height: 120px' : undefined)};

  ${({ invalid, validation }): string | undefined =>
    invalid && validation ? `border: 1px solid ${variable.color.alert}` : undefined};
  ${({ valid, validation }): string | undefined =>
    valid && validation ? `border: 1px solid ${variable.color.success}` : undefined};
`;

export const ValidatedMessageStyled = styled.p`
  color: ${({ color }): string => color || variable.color.alert};
  font-size: 10px;
  left: 0;
  line-height: 1.2;
  margin-top: 2px;
  position: absolute;
`;
