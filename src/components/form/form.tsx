import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { useTheme } from 'styled-components';

import { maskDecimal } from '@/helpers/mask';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { IInput, IInputDecimal, IInputRadioItems, IInputRadio, ILabel, ISelect } from '@/interface';

import { Button } from '@/components/button/button';
import {
  InputContainerStyled,
  InputCheckboxRadioStyled,
  InputDecrementIncrementContainerStyled,
  InputFileStyled,
  InputRadioStyled,
  InputStyled,
  LabelFileStyled,
  LabelPlaceholderStyled,
  LabelStyled,
  SelectStyled,
  TextareaStyled,
  ValidatedMessageStyled
} from '@/components/form/formStyled';
import { SvgArrowDown } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { Span } from '@/styles/text';
import { variable } from '@/styles/variable';

export function Label({ ariaLabel, children, forLabel, text, ...props }: ILabel): ReactElement {
  const acessibility = ariaLabel || text;
  const labelContent = children || text;

  return (
    <LabelStyled aria-label={acessibility} htmlFor={forLabel} {...props}>
      {labelContent}
    </LabelStyled>
  );
}

export function LabelFile({
  ariaLabel,
  children,
  component: Component = LabelFileStyled,
  forLabel,
  text,
  ...props
}: ILabel): ReactElement {
  const acessibility = ariaLabel || text;
  const labelContent = children || text;

  return (
    <Component aria-label={acessibility} htmlFor={forLabel} {...props}>
      {labelContent}
    </Component>
  );
}

// INPUTS
export function Input({
  cbFunction,
  idInput,
  label,
  maxLength = 100,
  name,
  placeholder,
  svgComponent: SvgComponent,
  typeInput = 'text',
  validationSchema,
  ...props
}: IInput): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const inputRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <InputContainerStyled>
      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        maxLength={maxLength}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value)}
        onFocus={(e): void => handleChange(e.currentTarget.value)}
        placeholder={capitalizeFirstLetter(placeholder)}
        ref={inputRef}
        textIndent={SvgComponent ? variable.space.spacingMD : undefined}
        type={typeInput}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}

export function InputCheckbox({
  cbFunction,
  component: Component = InputCheckboxRadioStyled,
  idInput,
  label = 'label',
  name,
  validationSchema,
  value = 'checkbox',
  ...props
}: IInput): ReactElement {
  // REF
  const inputRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  const defaultChecked = Boolean(defaultValue) === Boolean(value);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref: any) => {
        const { current } = ref;

        current.checked = false;
      },
      getValue: (ref: any) => {
        const { current } = ref;

        return current.checked;
      },
      setValue: (ref: any) => {
        const { current } = ref;

        current.checked = defaultChecked;
      }
    });
  }, [defaultChecked, fieldName, registerField]);

  // FUNCTION
  const handleChange = (checked = false): void => {
    if (inputRef.current) {
      try {
        inputRef.current.checked = checked;

        if (cbFunction) {
          cbFunction(checked);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: checked },
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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <div>
      <Component
        defaultChecked={defaultChecked}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e: any): void => handleChange(e.currentTarget.checked)}
        onFocus={(e: any): void => handleChange(e.currentTarget.checked)}
        ref={inputRef}
        type="checkbox"
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        value={value}
      />

      {label && (
        <Label aria-label={label} forLabel={idInput} {...props}>
          {label}
        </Label>
      )}

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </div>
  );
}

export function InputDecrementIncrement({
  cbFunction,
  decimalScale = 0,
  decimalSeparator = '',
  idInput,
  label,
  max = 99,
  maxLength = 100,
  name,
  placeholder,
  stepFactor = 1,
  svgComponent: SvgComponent,
  typeInput = 'text',
  typeMeasure = '',
  validationSchema,
  ...props
}: IInputDecimal): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const inputCleanValueRef = useRef<HTMLInputElement>(null);
  const inputFormattedValueRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputCleanValueRef,
      clearValue: (ref: any) => {
        const { current } = ref;

        current.value = '';
      },
      getValue: (ref: any) => {
        const { current } = ref;

        return current.value;
      }
    });
  }, [fieldName, registerField]);

  // FUNCTION
  const handleChange = (value: any): void => {
    if (inputCleanValueRef.current && inputFormattedValueRef.current) {
      try {
        let newValue = value;

        if (
          max &&
          parseInt(value.toString().replace(/\D/g, ''), 10) >
            parseInt(parseFloat(max.toString()).toFixed(decimalScale).toString().replace(/\D/g, ''), 10)
        ) {
          newValue = parseFloat(max.toString()).toFixed(decimalScale).toString();
        }

        const { cleanValue, formattedValue } = maskDecimal({
          decimalScale: decimalScale,
          decimalSeparator: decimalSeparator,
          typeMeasure: typeMeasure,
          value: newValue
        });

        inputCleanValueRef.current.value = cleanValue;
        inputFormattedValueRef.current.value = formattedValue;

        if (cbFunction) {
          cbFunction(formattedValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            {
              [fieldName]: maskDecimal({
                decimalScale: decimalScale,
                decimalSeparator: decimalSeparator,
                value: formattedValue
              }).formattedValue
            },
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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <InputDecrementIncrementContainerStyled>
      <input
        defaultValue={maskDecimal({ value: defaultValue }).cleanValue}
        id={idInput}
        name={fieldName}
        ref={inputCleanValueRef}
        type="hidden"
      />

      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={
          maskDecimal({
            decimalScale: decimalScale,
            decimalSeparator: decimalSeparator,
            typeMeasure: typeMeasure,
            value: parseFloat(defaultValue).toFixed(decimalScale)
          }).formattedValue
        }
        id={`${idInput}-formatted-value`}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        maxLength={maxLength}
        name={`${fieldName}-formatted-value`}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value)}
        onFocus={(e): void => handleChange(e.currentTarget.value)}
        placeholder={capitalizeFirstLetter(placeholder)}
        ref={inputFormattedValueRef}
        textIndent={SvgComponent ? variable.space.spacingMD : undefined}
        type={typeInput}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      <Button
        height="12px"
        onClick={(): void =>
          handleChange(
            parseInt((inputFormattedValueRef?.current?.value || 0).toString().replace(/\D/g, ''), 10) + stepFactor
          )
        }
        right={variable.layout.inputPaddingX}
        top="8px"
        typeStyle="button-unset"
      >
        <SvgArrowDown height="8px" />
      </Button>

      <Button
        height="12px"
        onClick={(): void =>
          handleChange(
            parseInt((inputFormattedValueRef?.current?.value || 0).toString().replace(/\D/g, ''), 10) - stepFactor
          )
        }
        right={variable.layout.inputPaddingX}
        top="20px"
        typeStyle="button-unset"
      >
        <SvgArrowDown height="8px" />
      </Button>

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputDecrementIncrementContainerStyled>
  );
}

export function InputFile({
  cbFunction,
  idInput,
  maxLength = 300,
  name,
  svgComponent: SvgComponent,
  typeInput = 'file',
  validationSchema,
  ...props
}: IInput): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const inputRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateFileName, setStateFileName] = useState<any>('Nenhum arquivo');
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref: any) => {
        const { current } = ref;

        current.files = null;
      },
      getValue: (ref: any) => {
        const { current } = ref;

        return current.files[0];
      },
      setValue: (ref: any, value: string) => {
        const { current } = ref;

        current.files[0] = value;
      }
    });
  }, [fieldName, registerField]);

  // FUNCTION
  const handleChange = (files: any): void => {
    if (inputRef.current) {
      try {
        setStateFileName(files ? files[0].name : 'undefined');

        if (cbFunction) {
          cbFunction(files ? files[0] : null);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: files ? files[0].name : 'undefined' },
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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <div>
      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputFileStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        maxLength={maxLength}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.files)}
        ref={inputRef}
        type={typeInput}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      <Spacer height={variable.space.spacingXS} />

      <LabelFile fontSize="12px" forLabel={idInput}>
        {stateFileName}
      </LabelFile>

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </div>
  );
}

export function InputFileThumbnail({
  cbFunction,
  idInput,
  maxLength = 300,
  name,
  svgComponent: SvgComponent,
  typeInput = 'file',
  validationSchema,
  ...props
}: IInput): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const inputRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref: any) => {
        const { current } = ref;

        current.files = null;
      },
      getValue: (ref: any) => {
        const { current } = ref;

        return current.files[0];
      },
      setValue: (ref: any, value: string) => {
        const { current } = ref;

        current.files[0] = value;
      }
    });
  }, [fieldName, registerField]);

  // FUNCTION
  const handleChange = (files: any): void => {
    if (inputRef.current) {
      try {
        if (cbFunction) {
          cbFunction(files ? files[0] : null);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: files ? files[0].name : 'undefined' },
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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <InputContainerStyled>
      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputFileStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        maxLength={maxLength}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.files)}
        ref={inputRef}
        type={typeInput}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}

export function InputRadio({
  cbFunction,
  component: Component = InputRadioStyled,
  idInput,
  items,
  itemsDisplay,
  name,
  validationSchema,
  ...props
}: IInputRadio): ReactElement {
  // REF
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRefs,
      clearValue: (refs: any) => {
        const { current } = refs;
        const inputRef = current.find((ref: any) => ref.checked === true);

        if (inputRef) {
          inputRef.checked = false;
        }
      },
      getValue: (refs: any) => {
        const { current } = refs;

        return current.find((ref: any) => ref?.checked)?.value;
      },
      setValue: (refs: any, id: string) => {
        const { current } = refs;

        const inputRef = current.find((ref: any) => ref.id === id);

        if (inputRef) {
          inputRef.checked = true;
        }
      }
    });
  }, [fieldName, registerField]);

  // FUNCTION
  const handleChange = (value: any, index: number): void => {
    if (inputRefs.current[index]) {
      try {
        inputRefs.current[index].value = value;

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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <div>
      {items?.map((item: IInputRadioItems, index: number) => {
        return (
          <Box display={itemsDisplay} key={`${item.id}`} mr="14px" mt={2} {...props}>
            <Component
              defaultChecked={defaultValue === item.value}
              id={`${idInput}-${item.id}`}
              invalid={Boolean(error) || Boolean(stateHasError)}
              label={item.label}
              name={fieldName}
              onBlur={(): void => setStateIsTouched(true)}
              onChange={(e: any): void => handleChange(e.currentTarget.value, index)}
              onFocus={(e: any): void => handleChange(e.currentTarget.value, index)}
              ref={(ref: HTMLInputElement): any => {
                inputRefs.current[index] = ref;
              }}
              type="radio"
              valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
              validation={Boolean(validationSchema)}
              value={item.value}
            />

            {item.label && (
              <Label aria-label={item.label} forLabel={`${idInput}-${item.id}`}>
                <Span verticalAlign="middle">{item.label}</Span>
              </Label>
            )}
          </Box>
        );
      })}

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </div>
  );
}

export function Select({
  cbFunction,
  children,
  idInput,
  label,
  name,
  svgComponent: SvgComponent,
  validationSchema,
  ...props
}: ISelect): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const selectRef = useRef<HTMLSelectElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: selectRef,
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
  const handleHasValue = (value: string): void => {
    if (value) {
      selectRef.current?.classList.add('has-value');
    } else {
      selectRef.current?.classList.remove('has-value');
    }
  };

  useEffect(() => {
    handleHasValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (value: any): void => {
    if (selectRef.current) {
      try {
        selectRef.current.value = value;

        console.log('fieldName: ', fieldName);

        handleHasValue(value);

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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <InputContainerStyled>
      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <SelectStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value)}
        onFocus={(e): void => handleChange(e.currentTarget.value)}
        pr={`calc(${variable.layout.inputPaddingX} * 3)`}
        ref={selectRef}
        textIndent={SvgComponent ? variable.space.spacingMD : undefined}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      >
        {children}
      </SelectStyled>

      {label && <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled>}

      <SvgArrowDown height="8px" right={variable.layout.inputPaddingX} />

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}

export function Textarea({
  cbFunction,
  idInput,
  label,
  maxLength = 1000,
  name,
  placeholder,
  validationSchema,
  ...props
}: IInput): ReactElement {
  // REF
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: textareaRef,
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
    if (textareaRef.current) {
      try {
        textareaRef.current.value = value;

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

          if (errorMessages[fieldName]) {
            setStateHasError(errorMessages[fieldName]);
          }
        }
      }

      setStateIsTouched(true);
    }
  };

  return (
    <InputContainerStyled>
      <TextareaStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        maxLength={maxLength}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value)}
        onFocus={(e): void => handleChange(e.currentTarget.value)}
        placeholder={capitalizeFirstLetter(placeholder)}
        ref={textareaRef}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}
