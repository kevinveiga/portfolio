import styled from 'styled-components';

import { variable } from '@/styles/variable';

export const DateRangeStyled = styled.div`
    .rdrCalendarWrapper {
        background-color: ${({ theme }): string => theme.bgColor.tertiary};
        border-radius: ${variable.layout.borderRadiusPrimary};
        box-sizing: border-box;
        color: ${({ theme }): string => theme.textColor.primary};
        display: inline-flex;
        flex-direction: column;
        font-size: 12px;
        user-select: none;

        &:not(.rdrDateRangeWrapper) {
            .rdrDayHovered {
                .rdrDays {
                    .rdrDayNumber {
                        &::after {
                            background-color: transparent;
                            border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
                            border-radius: 15px;
                            bottom: -2px;
                            content: ' ';
                            left: 0;
                            position: absolute;
                            right: 0;
                            top: -2px;
                        }
                    }
                }
            }
        }
    }

    .rdrDateDisplay {
        display: flex;
        justify-content: space-between;
        margin: ${variable.space.spacingXS};
    }

    .rdrDateDisplayItem {
        flex: 1 1 auto;
        text-align: center;
        width: 0;

        + .rdrDateDisplayItem {
            margin-left: ${variable.space.spacingXS};
        }

        input {
            background-color: ${({ theme }): string => theme.bgColor.primary};
            border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
            border-radius: ${variable.layout.borderRadiusPrimary};
            color: ${({ theme }): string => theme.textColor.primary};
            height: ${variable.layout.inputHeight};
            line-height: ${variable.layout.inputHeight};
            text-align: inherit;
            width: 100%;

            &:not(:read-only) {
                cursor: pointer;

                &:disabled {
                    cursor: default;
                }

                &:hover {
                    border: 1px solid ${({ theme }): string => theme.borderColor.primary};
                }
            }
        }
    }

    .rdrDateDisplayItemActive {
        input {
            &:not(:read-only) {
                border: 1px solid ${({ theme }): string => theme.borderColor.primary};
            }
        }
    }

    .rdrDateInput {
        position: relative;

        input {
            outline: none;
        }

        .rdrWarning {
            color: ${variable.color.warning};
            font-size: 14px;
            line-height: 1.5em;
            position: absolute;
            right: 0.25em;
            top: 0;
        }
    }

    .rdrDateRangePickerWrapper {
        display: inline-flex;
        user-select: none;
    }

    .rdrDateRangeWrapper {
        user-select: none;
    }

    .rdrDays {
        display: flex;
        flex-wrap: wrap;

        .rdrDay {
            background-color: transparent;
            border: 0;
            box-sizing: inherit;
            color: ${({ theme }): string => theme.textColor.primary};
            cursor: pointer;
            font: inherit;
            height: 2.5em;
            line-height: 2.5em;
            padding: 0;
            position: relative;
            text-align: center;
            user-select: none;
            width: calc(100% / 7);

            @supports (-ms-ime-align: auto) {
                flex-basis: 14.285% !important;
            }

            &:focus {
                outline: none;
            }

            &:not(.rdrDayPassive) {
                .rdrEndEdge,
                .rdrInRange,
                .rdrSelected,
                .rdrStartEdge {
                    ~ .rdrDayNumber {
                        span {
                            color: ${variable.color.tertiary};
                            font-weight: 700;
                        }
                    }
                }
            }
        }

        .rdrDayDisabled {
            background-color: ${({ theme }): string => theme.bgColor.tertiary};
            cursor: not-allowed;

            .rdrDayNumber {
                span {
                    color: ${({ theme }): string => theme.textColor.tertiary};
                }
            }

            .rdrDayStartPreview,
            .rdrDayEndPreview,
            .rdrDayInPreview,
            .rdrEndEdge,
            .rdrInRange,
            .rdrSelected,
            .rdrStartEdge {
                filter: grayscale(100%) opacity(50%);
            }
        }

        .rdrDayEndPreview {
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
        }

        .rdrDayEndPreview,
        .rdrDayInPreview,
        .rdrDayStartPreview {
            background-color: ${variable.color.blackTransparent2};
            bottom: 3px;
            left: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            top: 3px;
            z-index: 1;
        }

        .rdrDayEndOfMonth,
        .rdrDayEndOfWeek {
            .rdrDayInPreview,
            .rdrDayStartPreview {
                border-bottom-right-radius: 15px;
                border-top-right-radius: 15px;
            }

            .rdrInRange,
            .rdrStartEdge {
                border-bottom-right-radius: 15px;
                border-top-right-radius: 15px;
            }
        }

        .rdrDayNumber {
            align-items: center;
            bottom: 0;
            display: flex;
            font-weight: 400;
            justify-content: center;
            left: 0;
            outline: none;
            position: absolute;
            right: 0;
            top: 0;

            span {
                color: ${({ theme }): string => theme.textColor.primary};
            }
        }

        .rdrDayPassive {
            pointer-events: none;

            .rdrDayNumber {
                span {
                    color: ${({ theme }): string => theme.textColor.tertiary};
                }
            }

            .rdrEndEdge,
            .rdrDayEndPreview,
            .rdrDayInPreview,
            .rdrDayStartPreview,
            .rdrInRange,
            .rdrSelected,
            .rdrStartEdge {
                display: none;
            }
        }

        .rdrDayStartOfMonth,
        .rdrDayStartOfWeek {
            .rdrDayEndPreview,
            .rdrDayInPreview {
                border-bottom-left-radius: 15px;
                border-top-left-radius: 15px;
            }

            .rdrEndEdge,
            .rdrInRange {
                border-bottom-left-radius: 15px;
                border-top-left-radius: 15px;
            }
        }

        .rdrDayStartPreview {
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
        }

        .rdrDayToday {
            .rdrDayNumber {
                span {
                    &::after {
                        background-color: ${variable.color.tertiary};
                        border-radius: ${variable.layout.borderRadiusPrimary};
                        bottom: 6px;
                        content: ' ';
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        transform: translate(-50%, 0);
                        width: 15px;
                    }
                }
            }
        }

        .rdrEndEdge,
        .rdrInRange,
        .rdrSelected,
        .rdrStartEdge {
            background-color: ${({ theme }): string => theme.bgColor.primary};
            bottom: 3px;
            left: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            top: 3px;
        }

        .rdrEndEdge {
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
        }

        .rdrStartEdge {
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
        }
    }

    .rdrDefinedRangesWrapper {
        background-color: ${({ theme }): string => theme.bgColor.tertiary};
        border-right: solid 1px ${({ theme }): string => theme.borderColor.primary};
        font-size: 12px;
        width: 226px;

        .rdrStaticRangeSelected {
            background-color: ${({ theme }): string => theme.bgColor.primary};
            color: ${variable.color.tertiary} !important;
            font-weight: 700;
        }
    }

    .rdrInfiniteMonths {
        overflow: auto;
    }

    .rdrInputRange {
        align-items: center;
        display: flex;
        padding: 5px 20px;
    }

    .rdrInputRangeInput {
        background-color: ${({ theme }): string => theme.bgColor.primary};
        border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
        border-radius: ${variable.layout.borderRadiusPrimary};
        color: ${({ theme }): string => theme.textColor.primary};
        height: 25px;
        margin-right: 10px;
        outline: none;
        text-align: center;
        width: 30px;

        &:focus,
        &:hover {
            border-color: ${({ theme }): string => theme.borderColor.primary};
        }
    }

    .rdrInputRanges {
        padding: 10px 0;
    }

    .rdrMonth {
        padding: 0 ${variable.space.spacingXS} 1.666em ${variable.space.spacingXS};
        width: 27.667em;

        .rdrWeekDays {
            padding: 0;
        }
    }

    .rdrMonthAndYearPickers {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        justify-content: center;

        select {
            appearance: none;
            background-color: ${({ theme }): string => theme.bgColor.primary};
            background-image: url('data:image/svg+xml,<svg height="6px" viewBox="0 0 11.6 7.48" xmlns="http://www.w3.org/2000/svg"><path fill="%23777777" d="M5.05 7.14.25 1.66A1 1 0 0 1 1 0h9.6a1 1 0 0 1 .75 1.66l-4.8 5.48a1 1 0 0 1-1.5 0z" /></svg>');
            background-position: right 8px center;
            background-repeat: no-repeat;
            border: 0;
            border-radius: ${variable.layout.borderRadiusPrimary};
            color: ${({ theme }): string => theme.textColor.primary};
            cursor: pointer;
            height: ${variable.layout.inputHeight};
            line-height: ${variable.layout.inputHeight};
            outline: none;
            padding: 0 30px 0 10px;
            text-align: center;
            width: auto;

            &:hover {
                background-color: ${({ theme }): string => theme.bgColor.secondary};
            }
        }
    }

    .rdrMonthAndYearWrapper {
        align-items: center;
        box-sizing: inherit;
        display: flex;
        height: 40px;
        justify-content: space-between;
    }

    .rdrMonthName {
        color: ${({ theme }): string => theme.textColor.primary};
        font-weight: 700;
        padding: ${variable.space.spacingXS};
        text-align: left;
    }

    .rdrMonthPicker,
    .rdrYearPicker {
        margin: 0 5px;
    }

    .rdrMonths {
        display: flex;

        &.rdrMonthsVertical {
            display: none;
        }

        .rdrMonth {
            &:first-child {
                .rdrMonthName {
                    display: none;
                }
            }
        }
    }

    .rdrMonthsHorizontal {
        > div {
            > div {
                > div {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
    }

    .rdrMonthsVertical {
        flex-direction: column;
    }

    .rdrNextPrevButton {
        background-color: ${variable.color.tertiary};
        border: 0;
        border-radius: ${variable.layout.borderRadiusPrimary};
        box-sizing: inherit;
        cursor: pointer;
        display: block;
        height: 24px;
        margin: 0 ${variable.space.spacingXS};
        outline: none;
        padding: 0;
        width: 24px;

        &:hover {
            background-color: ${variable.color.tertiaryHover};
        }

        i {
            border-style: solid;
            display: block;
            height: 0;
            margin: auto;
            padding: 0;
            text-align: center;
            transform: translate(-3px, 0);
            width: 0;
        }
    }

    .rdrNextButton {
        &:hover {
            i {
                border-color: transparent transparent transparent ${variable.color.white};
            }
        }

        i {
            border-color: transparent transparent transparent ${variable.color.grayDark3};
            border-width: 4px 4px 4px 6px;
            transform: translate(3px, 0);
        }
    }

    .rdrPprevButton {
        &:hover {
            i {
                border-color: transparent ${variable.color.white} transparent transparent;
            }
        }

        i {
            border-color: transparent ${variable.color.grayDark3} transparent transparent;
            border-width: 4px 6px 4px 4px;
            transform: translate(-3px, 0);
        }
    }

    .rdrSelected {
        border-radius: 15px;
        left: 2px;
        right: 2px;
    }

    .rdrStaticRange {
        background-color: ${({ theme }): string => theme.bgColor.tertiary};
        border: 0;
        border-bottom: 1px solid ${({ theme }): string => theme.borderColor.primary};
        cursor: pointer;
        display: block;
        font-size: 12px;
        outline: none;
        padding: 0;

        &:focus,
        &:hover {
            background-color: ${({ theme }): string => theme.bgColor.primary};
        }
    }

    .rdrStaticRangeLabel {
        display: block;
        line-height: 18px;
        outline: none;
        padding: 10px 20px;
        text-align: left;
    }

    .rdrStaticRanges {
        display: flex;
        flex-direction: column;
    }

    .rdrWeekDay {
        box-sizing: inherit;
        color: ${({ theme }): string => theme.textColor.primary};
        flex-basis: calc(100% / 7);
        font-weight: 700;
        line-height: 2.5em;
        text-align: center;
    }

    .rdrWeekDays {
        display: flex;
        padding: 0 ${variable.space.spacingXS};
    }
`;
