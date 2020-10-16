/* eslint-disable react/prop-types */
/*
 * Collection of redux form fields
 * With some validations over these fields
*/

import React from 'react';
import { CLabel, CInput, CFormGroup } from '@coreui/react';

export const Validations = (props) => {
    const {
        touched,
        error,
        validationError,
        warning,
    } = props.props;

    return (
        <>
            <p>
                {touched && ((error && <span className="field_error">{error}</span>) || (warning && <span>{warning}</span>))}
            </p>
            {validationError && (
                <p>
                    {(validationError && <span className="field_error">{validationError}</span>)}
                </p>
            )}
        </>
    );
};

const renderField = (props) => {
    const {
        input,
        label,
        name,
        type,
        placeholder,
        disabled,
        validationError,
        meta: { touched, error, warning },
        maxLength,
        formClass,
        rows,
    } = props;

    return (
        <CFormGroup className={ formClass + ' force-mb-10' } style={ { width: '100%' } }>
            {label && <CLabel className="force_mb-5" for={ name }>{label || ''}</CLabel>}
            <CInput rows={ rows } { ...input } maxLength={ maxLength } disabled={ disabled || false } type={ type } className={ validationError || (touched && error) ? 'validation-error' : '' } placeholder={ placeholder || '' } />
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </CFormGroup>
    );
};

const renderCheckbox = (props) => {
    const {
        input,
        placeholder,
        validationError,
        checked,
        disabled,
        meta: { touched, error, warning },
    } = props;

    return (
        <CFormGroup check>
            <CLabel check>
                <CInput { ...input } disabled={ disabled || false } checked={ checked } type="checkbox" />
                {' '}
                {placeholder}
            </CLabel>
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </CFormGroup>
    );
};

const renderSelectField = ({
    input,
    label,
    selectLabel,
    optionValues,
    formClass,
    validationError,
    disabled,
    meta: { touched, error, warning },
}) => (
    <React.Fragment>
        <CFormGroup className={ formClass + ' force-mb-10' }>
            {label && <CLabel>{label}</CLabel>}
            <CInput { ...input } placeholder="choose" type="select" disabled={ disabled || false }>
                {selectLabel && (
                    <option value="" disabled>
                        {selectLabel}
                    </option>
                )}
                {optionValues &&
                optionValues.map((item, index) => (
                    <option key={ index } value={ item.value }>
                        {item.label}
                    </option>
                ))}
            </CInput>
            <Validations
                props={ {
                    touched,
                    error,
                    validationError,
                    warning,
                } }
            />
        </CFormGroup>
    </React.Fragment>
);

export {
    renderField,
    renderCheckbox,
    renderSelectField
};