import styles from './styles.module.css';

interface InputProps extends React.ComponentProps<'input'> {
  id: string;
  labelText: string;
}

export function Input({ id, labelText, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} className={styles.input} {...rest} />
    </>
  );
}
