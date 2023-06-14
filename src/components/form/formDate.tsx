import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { Calendar, DateRange } from 'react-date-range';

import yup from '@/helpers/yup';
import { IInputDate, IInputDateRange } from '@/interface';

import { DateRangeStyled } from '@/components/form/dateRangeStyled';
import { InputContainerStyled, InputStyled, LabelPlaceholderStyled, ValidatedMessageStyled } from '@/components/form/formStyled';
import { Button } from '@/components/button/button';
import { ModalMessage } from '@/components/modal/modalMessage';
import { SvgCalendar } from '@/components/svg/svgStore';

import { variable } from '@/styles/variable';

// DYNAMIC
const ModalMessageDynamic = dynamic<any>(() => import('../modal/modalMessage').then((module) => module.ModalMessage), {
    ssr: false
}) as typeof ModalMessage;

export function InputDate({
    cbFunction,
    idInput,
    label,
    maxDate = undefined,
    maxLength = 25,
    minDate = undefined,
    name,
    placeholder,
    validationSchema,
    ...props
}: IInputDate): ReactElement {
    // REF
    const inputRef = useRef<HTMLInputElement>(null);

    // STATE
    const { defaultValue, error, fieldName, registerField } = useField(name);
    const [stateDate, setStateDate] = useState<Date | undefined>(undefined);
    const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
    const [stateIsTouched, setStateIsTouched] = useState(false);
    const [stateModal, setStateModal] = useState(false);

    // USEEFFECT
    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputRef,
            clearValue: (ref: any) => {
                const { current } = ref;

                current.value = '';
            },
            getValue: (ref: any) => {
                const { current } = ref;

                return current.value;
            },
            setValue: (ref: any, value: string) => {
                const { current } = ref;

                current.value = value;
            }
        });
    }, [fieldName, registerField]);

    // FUNCTION
    const handleChange = (value: any): void => {
        if (inputRef.current) {
            try {
                inputRef.current.value = value;

                if (cbFunction) {
                    cbFunction(value);
                }

                if (validationSchema) {
                    setStateHasError(undefined);

                    validationSchema.validateSync(
                        { [fieldName]: value },
                        {
                            abortEarly: false
                        }
                    );
                }
            } catch (err) {
                if (err instanceof yup.ValidationError) {
                    const errorMessages: { [key: string]: string } = {};

                    err.inner.forEach((item: any) => {
                        errorMessages[item.path] = item.message;
                    });

                    setStateHasError(errorMessages[fieldName]);
                }
            }

            setStateIsTouched(true);
        }
    };

    const handleDate = (value: any): void => {
        handleChange(dayjs(value).format('DD/MM/YYYY'));
        setStateDate(value);
    };

    return (
        <InputContainerStyled>
            <InputStyled
                autoComplete="off"
                defaultValue={defaultValue}
                id={idInput}
                invalid={Boolean(stateHasError)}
                label={label}
                maxLength={maxLength}
                name={fieldName}
                onBlur={(): void => setStateIsTouched(true)}
                onFocus={(e): void => handleChange(e.currentTarget.value)}
                placeholder={placeholder}
                readOnly={true}
                ref={inputRef}
                type="text"
                valid={Boolean(stateHasError) === false && (defaultValue || stateIsTouched) ? true : undefined}
                validation={Boolean(validationSchema)}
                {...props}
            />

            {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

            <Button
                onClick={(): void => {
                    setStateDate((current) => current || new Date());
                    setStateModal(true);
                }}
                position="absolute"
                right={variable.layout.inputPaddingX}
                top="10px"
                typeStyle="button-unset"
            >
                <SvgCalendar height="16px" width="16px" />
            </Button>

            {(error && !stateIsTouched) || stateHasError ? <ValidatedMessageStyled>{stateHasError}</ValidatedMessageStyled> : undefined}

            {stateModal ? (
                <ModalMessageDynamic setActive={setStateModal} title="Calendar" zIndex={14}>
                    <DateRangeStyled>
                        <Calendar
                            date={stateDate}
                            direction="horizontal"
                            editableDateInputs={false}
                            maxDate={maxDate}
                            minDate={minDate}
                            months={1}
                            onChange={(item: any): void => handleDate(item)}
                        />
                    </DateRangeStyled>
                </ModalMessageDynamic>
            ) : null}
        </InputContainerStyled>
    );
}

export function InputDateRangeStartEnd({
    cbFunction,
    idInput,
    label,
    maxDate = undefined,
    maxLength = 25,
    minDate = undefined,
    name,
    nameStartDate = 'startDate',
    nameEndDate = 'endDate',
    placeholder,
    validationSchema,
    ...props
}: IInputDateRange): ReactElement {
    // REF
    const inputRef = useRef<HTMLInputElement>(null);
    const inputStartRef = useRef<HTMLInputElement>(null);
    const inputEndRef = useRef<HTMLInputElement>(null);

    // STATE
    const { defaultValue, error, fieldName, registerField } = useField(name);
    const [stateDate, setStateDate] = useState<Record<string, any>>({});
    const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
    const [stateIsTouched, setStateIsTouched] = useState(false);
    const [stateModal, setStateModal] = useState(false);

    // USEEFFECT
    useEffect(() => {
        registerField<string>({
            name: fieldName,
            ref: inputRef,
            clearValue: (ref: any) => {
                const { current } = ref;

                current.value = '';
            },
            getValue: (ref: any) => {
                const { current } = ref;

                return current.value;
            },
            setValue: (ref: any, value: string) => {
                const { current } = ref;

                current.value = value;
            }
        });

        registerField<string>({
            name: nameStartDate,
            ref: inputStartRef,
            clearValue: (ref: any) => {
                const { current } = ref;

                current.value = '';
            },
            getValue: (ref: any) => {
                const { current } = ref;

                return current.value;
            },
            setValue: (ref: any, value: string) => {
                const { current } = ref;

                current.value = value;
            }
        });

        registerField<string>({
            name: nameEndDate,
            ref: inputEndRef,
            clearValue: (ref: any) => {
                const { current } = ref;

                current.value = '';
            },
            getValue: (ref: any) => {
                const { current } = ref;

                return current.value;
            },
            setValue: (ref: any, value: string) => {
                const { current } = ref;

                current.value = value;
            }
        });
    }, [fieldName, nameEndDate, nameStartDate, registerField]);

    // FUNCTION
    const handleChange = (value: any): void => {
        if (inputRef.current) {
            try {
                inputRef.current.value = value;

                if (cbFunction) {
                    cbFunction(value);
                }

                if (validationSchema) {
                    setStateHasError(undefined);

                    validationSchema.validateSync(
                        { [fieldName]: value },
                        {
                            abortEarly: false
                        }
                    );
                }
            } catch (err) {
                if (err instanceof yup.ValidationError) {
                    const errorMessages: { [key: string]: string } = {};

                    err.inner.forEach((item: any) => {
                        errorMessages[item.path] = item.message;
                    });

                    setStateHasError(errorMessages[fieldName]);
                }
            }

            setStateIsTouched(true);
        }
    };

    const handleDateRangeStartEnd = (obj: Record<string, any>): void => {
        if (inputRef.current && inputStartRef.current && inputEndRef.current) {
            const startDate = dayjs(obj.selection.startDate).format('DD/MM/YYYY');
            const endDate = dayjs(obj.selection.endDate).format('DD/MM/YYYY');

            handleChange(`${startDate} - ${endDate}`);
            setStateDate(obj.selection);

            inputStartRef.current.value = startDate;
            inputEndRef.current.value = endDate;
        }
    };

    return (
        <InputContainerStyled>
            <InputStyled
                autoComplete="off"
                defaultValue={defaultValue}
                id={idInput}
                invalid={Boolean(stateHasError)}
                label={label}
                maxLength={maxLength}
                name={fieldName}
                onBlur={(): void => setStateIsTouched(true)}
                onFocus={(e): void => handleChange(e.currentTarget.value)}
                placeholder={placeholder}
                readOnly={true}
                ref={inputRef}
                type="text"
                valid={Boolean(stateHasError) === false && (defaultValue || stateIsTouched) ? true : undefined}
                validation={Boolean(validationSchema)}
                {...props}
            />

            {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

            <Button
                onClick={(): void => {
                    setStateDate((current) =>
                        Object.keys(current).length > 0
                            ? current
                            : {
                                  startDate: new Date(),
                                  endDate: new Date(),
                                  key: 'selection'
                              }
                    );
                    setStateModal(true);
                }}
                position="absolute"
                right={variable.layout.inputPaddingX}
                top="10px"
                typeStyle="button-unset"
            >
                <SvgCalendar height="16px" width="16px" />
            </Button>

            {(error && !stateIsTouched) || stateHasError ? <ValidatedMessageStyled>{stateHasError}</ValidatedMessageStyled> : undefined}

            <input name={nameStartDate} ref={inputStartRef} type="hidden" />

            <input name={nameEndDate} ref={inputEndRef} type="hidden" />

            {stateModal ? (
                <ModalMessageDynamic setActive={setStateModal} title="Calendar" zIndex={14}>
                    <DateRangeStyled>
                        <DateRange
                            direction="horizontal"
                            editableDateInputs={false}
                            maxDate={maxDate}
                            minDate={minDate}
                            moveRangeOnFirstSelection={false}
                            months={1}
                            onChange={(item: any): void => handleDateRangeStartEnd(item)}
                            ranges={[stateDate]}
                        />
                    </DateRangeStyled>
                </ModalMessageDynamic>
            ) : null}
        </InputContainerStyled>
    );
}
