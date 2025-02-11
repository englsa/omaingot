import React, { FC } from 'react';
// import { ErrorMessage } from '@hookform/error-message';
import { Controller, ControllerProps, get, useFormContext, Message, Control, useForm } from 'react-hook-form';
import { StyleSheet, TextInputProps, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { formatDate } from '../../ultils/helpers';
import { colors } from '../../ultils/themes';
import { fontWeights, sizes } from '../sizings';


type Props = React.ComponentProps<typeof TextInput> & {
  name: string;
  rules?: ControllerProps['rules'];
  showRequiredMark?: boolean;
  isDate?: boolean;
  disabled?: boolean;
  control?: any
  errors?: any
};

const ControlledTextInput: FC<Props> = ({ name, showRequiredMark, errors, control, rules, disabled, style, ...textFieldProps }) => {
  // const {
  //   control,
  //   formState: { errors },
  // } = useForm();
  const error = get(errors, name);
  const changeColor = colors.primary;
  const requiredMark = !!rules?.required && showRequiredMark;
  
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <TextInput
              theme={{
                colors: {
                  placeholder: error ? colors.red : changeColor,
                  primary: changeColor,
                  background: colors.primary,
                },
              }}
              mode="outlined"
              outlineColor={colors.primary}
              style={[styles.input, style]}
              {...{
                ...textFieldProps,
                disabled,
                value:
                  (textFieldProps.value ||
                    (textFieldProps.isDate // state ( value or date )
                      ? value
                        ? formatDate(value)
                        : ''
                      : value)) ??
                  '',
                onChangeText: (text: any) => {
                  onChange(text);
                  textFieldProps?.onChangeText && textFieldProps.onChangeText(text);
                },
              }}

            />
          );
        }}
      />
      {error && (
        <Text style={styles.error}> {error}</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  input: {
    // width: '100%',
    backgroundColor: colors.white,
    // fontWeight: fontWeights.fontWeight_500,
  },
  error: {
    color: colors.error,
  },
});

export default ControlledTextInput;
