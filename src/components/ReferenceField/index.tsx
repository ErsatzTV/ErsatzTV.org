import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

type Props = {
  name: string;
  type: React.ReactNode;
  required?: boolean;
  since: string;
  unreleased?: boolean;
  defaultJson?: string;
  children?: React.ReactNode;
};

export default function ReferenceField({name, type, required, since, unreleased, defaultJson, children}: Props) {
  const complexDefault = defaultJson !== undefined && defaultJson !== '[]' && defaultJson !== '{}' &&
    (defaultJson.startsWith('{') || defaultJson.startsWith('[') || defaultJson.length > 64);
  return (
    <section className={styles.field} aria-label={name}>
      <div className={styles.heading}>
        <code className={styles.name}>{name}</code>
        {required && <span className={styles.required}>Required</span>}
        {unreleased && <span className={styles.unreleased}>Unreleased</span>}
      </div>
      <div className={styles.metadata}>
        <span>{type}</span>
        {defaultJson !== undefined && !complexDefault && <span>Default: <code>{defaultJson}</code></span>}
        <span>Since {since}</span>
      </div>
      <div className={styles.description}>{children}</div>
      {complexDefault && <details className={styles.default}>
        <summary>Default value</summary>
        <CodeBlock language="json">{JSON.stringify(JSON.parse(defaultJson!), null, 2)}</CodeBlock>
      </details>}
    </section>
  );
}
