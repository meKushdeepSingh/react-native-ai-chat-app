export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'link'
  | 'transparent';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger';
export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
};
