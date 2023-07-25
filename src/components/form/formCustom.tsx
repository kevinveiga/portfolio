import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { maskCep, maskCpf, maskCurrency, maskPhone } from '@/helpers/mask';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { IInput, IInputPasswordConfirm, ISelectCustom, ISelectCustomItems } from '@/interface';
import { useClickOutside } from '@/hooks/clickOutside/useClickOutside';

import {
  InputContainerStyled,
  InputStyled,
  LabelPlaceholderStyled,
  SelectOptionsCustomStyled,
  ValidatedMessageStyled
} from '@/components/form/formStyled';
import { Button } from '@/components/button/button';
import {
  SvgArrowDown,
  SvgEnvelope,
  SvgIdentification,
  SvgLock,
  SvgMoney,
  SvgNumber,
  SvgPin,
  SvgPhone,
  SvgView,
  SvgUser,
  SvgViewDisabled
} from '@/components/svg/svgStore';

import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function InputCep({
  cbFunction,
  idInput,
  label,
  maxLength = 9,
  name,
  placeholder,
  showSvg = true,
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
        const { cleanValue } = maskCep(current.value);

        return cleanValue;
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
        const newValue = maskCep(value).formattedValue;

        inputRef.current.value = newValue;

        if (cbFunction) {
          cbFunction(newValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: newValue },
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
      {showSvg ? (
        <SvgPin height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={maskCep(defaultValue).formattedValue}
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function InputCpf({
  cbFunction,
  idInput,
  label,
  maxLength = 14,
  name,
  placeholder,
  showSvg = true,
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
        const { cleanValue } = maskCpf(current.value);

        return cleanValue;
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
        const newValue = maskCpf(value).formattedValue;

        inputRef.current.value = newValue;

        if (cbFunction) {
          cbFunction(newValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: newValue },
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
      {showSvg ? (
        <SvgIdentification
          height="16px"
          left={variable.layout.inputPaddingX}
          fill={bgColor.quaternary}
          maxWidth="16px"
        />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={maskCpf(defaultValue).formattedValue}
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function InputCurrency({
  cbFunction,
  idInput,
  label,
  maxLength = 25,
  name,
  placeholder,
  showSvg = true,
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
        const { cleanValue } = maskCurrency(current.value);

        return cleanValue;
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
        const newValue = maskCurrency(value).formattedValue;

        inputRef.current.value = newValue;

        if (cbFunction) {
          cbFunction(newValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: newValue },
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
      {showSvg ? (
        <SvgMoney height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={maskCurrency(defaultValue).formattedValue}
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function InputEmail({
  cbFunction,
  idInput,
  label,
  maxLength = 70,
  name,
  placeholder,
  showSvg = true,
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
      {showSvg ? (
        <SvgEnvelope height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="email"
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

export function InputName({
  cbFunction,
  idInput,
  label,
  maxLength = 100,
  name,
  placeholder,
  showSvg = true,
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
      {showSvg ? (
        <SvgUser height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={capitalizeFirstLetter(defaultValue)}
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function InputNumber({
  cbFunction,
  idInput,
  label,
  max,
  min,
  name,
  placeholder,
  showSvg = true,
  separator,
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
        let formattedValue;

        if (separator) {
          formattedValue = value
            .replace(/[^\d.]/, '')
            .replace(/^(0+0)/, '0')
            .replace(/(\.+\.)/, '.');
        } else {
          formattedValue = value.replace(/\D/, '').replace(/^(0+0)/, '0');
        }

        if (min && parseInt(formattedValue, 10) < min) {
          formattedValue = min.toString();
        }

        if (max && parseInt(formattedValue, 10) > max) {
          formattedValue = max.toString();
        }

        inputRef.current.value = formattedValue;

        if (cbFunction) {
          cbFunction(formattedValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: formattedValue },
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
      {showSvg ? (
        <SvgNumber height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={defaultValue}
        id={idInput}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        max={max}
        min={min}
        name={fieldName}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value)}
        onFocus={(e): void => handleChange(e.currentTarget.value)}
        placeholder={capitalizeFirstLetter(placeholder)}
        ref={inputRef}
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function InputPassword({
  cbFunction,
  idInput,
  label,
  maxLength = 50,
  name,
  placeholder,
  showSvg = true,
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
  const [stateView, setStateView] = useState(false);

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
      {showSvg ? (
        <SvgLock height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type={stateView ? 'text' : 'password'}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      <Button
        height="16px"
        onClick={(): void => setStateView(!stateView)}
        right={variable.space.spacingSM}
        typeStyle="button-unset"
        width="16px"
      >
        {stateView ? (
          <SvgViewDisabled fill={variable.color.primary} height="16px" maxWidth="16px" />
        ) : (
          <SvgView fill={variable.color.primary} height="16px" maxWidth="16px" />
        )}
      </Button>

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}

export function InputPasswordConfirm({
  cbFunction,
  idInput,
  inputPassword,
  label,
  maxLength = 50,
  name,
  placeholder,
  showSvg = true,
  validationSchema,
  ...props
}: IInputPasswordConfirm): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();

  // REF
  const inputRef = useRef<HTMLInputElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);
  const [stateView, setStateView] = useState(false);

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
  const handleChange = useCallback(
    (inputValue: string | null): void => {
      if (inputRef.current) {
        try {
          if (inputValue) {
            inputRef.current.value = inputValue;
          }

          const { current: { value = '' } = {} } = inputRef;

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
    },
    [cbFunction, fieldName, validationSchema]
  );

  useEffect(() => {
    if (inputPassword) {
      handleChange(null);
    }

    return undefined;
  }, [handleChange, inputPassword]);

  return (
    <InputContainerStyled>
      {showSvg ? (
        <SvgLock height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type={stateView ? 'text' : 'password'}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      <Button
        height="16px"
        onClick={(): void => setStateView(!stateView)}
        right={variable.space.spacingSM}
        typeStyle="button-unset"
        width="16px"
      >
        {stateView ? (
          <SvgViewDisabled fill={variable.color.primary} height="16px" maxWidth="16px" />
        ) : (
          <SvgView fill={variable.color.primary} height="16px" maxWidth="16px" />
        )}
      </Button>

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}

export function InputPhone({
  cbFunction,
  idInput,
  label,
  maxLength = 15,
  name,
  placeholder,
  showSvg = true,
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
        const { cleanValue } = maskPhone(current.value);

        return cleanValue;
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
        const newValue = maskPhone(value).formattedValue;

        inputRef.current.value = newValue;

        if (cbFunction) {
          cbFunction(newValue);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: newValue },
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
      {showSvg ? (
        <SvgPhone height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={maskPhone(defaultValue).formattedValue}
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
        textIndent={showSvg ? variable.space.spacingMD : undefined}
        type="text"
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

export function SelectCustom({
  cbFunction,
  idInput,
  items,
  label,
  maxLength = 100,
  name,
  placeholder,
  selectLabel,
  selectValue,
  svgComponent: SvgComponent,
  typeInput = 'text',
  validationSchema,
  ...props
}: ISelectCustom): ReactElement {
  // CONTEXT
  const { bgColor } = useTheme();
  const { t } = useTranslation();

  // REF
  const inputLabelRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const selectOptionsRef = useRef<HTMLDivElement>(null);

  // STATE
  const { defaultValue, error, fieldName, registerField } = useField(name);
  const [stateHasError, setStateHasError] = useState<string | undefined>(undefined);
  const [stateIsTouched, setStateIsTouched] = useState(false);
  const [stateSelect, setStateSelect] = useState(false);

  // CUSTOM HOOK
  useClickOutside(selectOptionsRef, (): void => setStateSelect(false));

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef,
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
  const handleChange = (inputLabel: any, inputValue: any): void => {
    if (inputLabelRef.current && inputValueRef.current) {
      try {
        const inputLabelCapitalize = capitalizeFirstLetter(inputLabel);

        inputLabelRef.current.value = inputLabelCapitalize;

        if (inputValue !== null) {
          inputValueRef.current.value = inputValue;
        }

        if (cbFunction) {
          cbFunction(inputLabelCapitalize);
        }

        if (validationSchema) {
          setStateHasError(undefined);

          validationSchema.validateSync(
            { [fieldName]: inputLabelCapitalize },
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
      <input
        defaultValue={inputValueRef.current?.value || selectValue || defaultValue}
        id={idInput}
        name={fieldName}
        ref={inputValueRef}
        type="hidden"
      />

      {SvgComponent ? (
        <SvgComponent height="16px" left={variable.layout.inputPaddingX} fill={bgColor.quaternary} maxWidth="16px" />
      ) : null}

      <InputStyled
        autoComplete="off"
        defaultValue={capitalizeFirstLetter(selectLabel || defaultValue)}
        cursor="pointer"
        id={`${idInput}-label`}
        invalid={Boolean(error) || Boolean(stateHasError)}
        label={label}
        maxLength={maxLength}
        name={`${fieldName}-label`}
        onBlur={(): void => setStateIsTouched(true)}
        onChange={(e): void => handleChange(e.currentTarget.value, null)}
        onClick={(): void => setStateSelect((prevState) => !prevState)}
        onFocus={(e): void => handleChange(e.currentTarget.value, null)}
        placeholder={capitalizeFirstLetter(placeholder)}
        pr={`calc(${variable.layout.inputPaddingX} * 3)`}
        readOnly={true}
        ref={inputLabelRef}
        textIndent={SvgComponent ? variable.space.spacingMD : undefined}
        type={typeInput}
        valid={Boolean(stateHasError) === false && stateIsTouched ? true : undefined}
        validation={Boolean(validationSchema)}
        {...props}
      />

      <SelectOptionsCustomStyled active={stateSelect} ref={selectOptionsRef} {...props}>
        <ul>
          {items && items?.length > 0 ? (
            items?.map((item: ISelectCustomItems) => {
              return (
                <li key={item.value}>
                  <Button
                    onClick={(): void => handleChange(item.label, item.value)}
                    text={capitalizeFirstLetter(item.label)}
                    typeStyle="button-unset"
                  />
                </li>
              );
            })
          ) : (
            <li>
              <P>{t('no data found', { ns: 'glossary' })}</P>
            </li>
          )}
        </ul>
      </SelectOptionsCustomStyled>

      {!placeholder && label ? <LabelPlaceholderStyled aria-label={label}>{label}</LabelPlaceholderStyled> : undefined}

      <SvgArrowDown height="8px" right={variable.layout.inputPaddingX} />

      {(error && !stateIsTouched) || stateHasError ? (
        <ValidatedMessageStyled>{error || stateHasError}</ValidatedMessageStyled>
      ) : undefined}
    </InputContainerStyled>
  );
}
