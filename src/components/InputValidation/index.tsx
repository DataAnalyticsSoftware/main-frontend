import React from 'react';
import './index.scss';

export const InputValidation = (props: any) => {
  const { title, text, styles, type, required, tooltip, isValid, submit, onChange, value } = props;

  const inputClasses = `form-control ${submit == null ? (submit ? 'is-valid' : 'is-invalid') : null}`;

  return (
    <div className={styles}>
      <label htmlFor="validationTooltip03" className="form-label">
        {title}
      </label>
      <input
        type={type}
        className={inputClasses}
        id="validationTooltip03"
        required={required === 'yes'}
        value={value}
        onChange={(e: any) => onChange(e.target.value)} // Utiliza onChange en lugar de setState
      />
      <div className={tooltip}>
        {submit ? (
          <div className="valid-feedback">{text}</div>
        ) : (
          <div className="invalid-feedback">{text}</div>
        )}
      </div>
    </div>
  );
};
