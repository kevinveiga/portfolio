import { Dispatch, SetStateAction } from 'react'

export type TAlignContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'space-around'
  | 'space-between'
  | 'stretch'

export type TAlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'stretch'

export type TAlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'stretch'

export type TAnimationDirection = 'alternate' | 'alternate-reverse' | 'inherit' | 'initial' | 'normal' | 'reverse'

export type TAnimationFillMode = 'backwards' | 'both' | 'inherit' | 'initial' | 'none' | 'forwards'

export type TAnimationIterationCount = 'infinite' | 'inherit' | 'initial' | number

export type TAnimationPlayState = 'inherit' | 'initial' | 'paused' | 'running'

export type TBackgroundRepeat = 'inherit' | 'initial' | 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'

export type TCursor =
  | 'alias'
  | 'all-scroll'
  | 'auto'
  | 'cell'
  | 'col-resize'
  | 'context-menu'
  | 'copy'
  | 'crosshair'
  | 'default'
  | 'e-resize'
  | 'ew-resize'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'inherit'
  | 'initial'
  | 'move'
  | 'n-resize'
  | 'ne-resize'
  | 'nesw-resize'
  | 'no-drop'
  | 'none'
  | 'not-allowed'
  | 'ns-resize'
  | 'nw-resize'
  | 'nwse-resize'
  | 'paused'
  | 'pointer'
  | 'progress'
  | 'row-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'text'
  | 'unset'
  | 'vertical-text'
  | 'w-resize'
  | 'wait'
  | 'zoom-in'
  | 'zoom-out'

export type TDisplay =
  | 'block'
  | 'contents'
  | 'flex'
  | 'grid'
  | 'inherit'
  | 'initial'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'list-item'
  | 'none'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row'

export type TFlexDirection = 'column' | 'column-reverse' | 'inherit' | 'initial' | 'row' | 'row-reverse'

export type TFlexWrap = 'inherit' | 'initial' | 'nowrap' | 'wrap' | 'wrap-reverse'

export type TFontWeight = 'inherit' | 'initial' | 300 | 700

export type TGap = 'inherit' | 'initial' | 'normal' | 'revert' | 'unset' | number | string

export type TInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export type TJustifyContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

export type TJustifyItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'inherit' | 'initial' | 'stretch'

export type TJustifySelf =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'stretch'

export type TLanguage = 'en' | 'pt_BR'

export type TOverflow =
  | 'auto'
  | 'hidden'
  | 'inherit'
  | 'initial'
  | 'overlay'
  | 'revert'
  | 'scroll'
  | 'unset'
  | 'visible'

export type TPosition = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'

export type TState<T> = [T, Dispatch<SetStateAction<T>>]

export type TTextAlign = 'center' | 'inherit' | 'initial' | 'justify' | 'left' | 'right'

export type TTextTransform = 'capitalize' | 'inherit' | 'initial' | 'lowercase' | 'none' | 'uppercase'

export type TVerticalAlign =
  | 'baseline'
  | 'bottom'
  | 'inherit'
  | 'initial'
  | 'length'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top'

export type TWhiteSpace = 'inherit' | 'initial' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'
