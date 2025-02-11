import React, { FC, useState } from 'react';
import { ControllerProps } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';


import ControlledTextInput from './ControlledTextInput';
import moment from 'moment';
import { DATE_FORMAT } from '../../ultils/constants';
import { colors } from '../../ultils/themes';
import { formatDate } from '../../ultils/helpers';


type Props = React.ComponentProps<typeof TextInput> & {
  name: string;
  rules?: ControllerProps['rules'];
  label?: string;
  disabled?: boolean;
  date?: Date;
  setDate: (date?: Date) => void;
  setValue?: any;
  control?: any
  errors?: any
};

const ControlledTextInputCalendar: FC<Props> = ({
  name,
  rules,
  disabled,
  date,
  setDate,
  setValue,
  control,
  errors,
  ...textFieldProps
}) => {
  const [show, setShow] = useState<boolean>(false);
  const showCalendar = () => {
    Keyboard.dismiss();
    setShow(true);

  };
  const onChange = (selectedDate?: Date) => {
    setShow(false);
    // TODO: need a way to clear the selected date (setDate & setValue)
    if (!selectedDate) {
      return;
    } else {
      setDate(selectedDate);
      setValue && setValue(name,  formatDate(selectedDate) );
    }
  };

  return (
    <>
      <ControlledTextInput
        {...{
          name,
          rules,
          disabled,
          control,
          errors,
          ...textFieldProps,
        
        }}
        clearButtonMode="while-editing"
        onFocus={showCalendar}
        value={date ? moment(date).format(DATE_FORMAT) : ''}
        right={!disabled && <TextInput.Icon onPress={showCalendar} icon="calendar"  color={colors.primary}/>}
        isDate={true}
      />
      <DatePicker
        modal
        mode="date"
        open={show}
        onConfirm={onChange}
        onCancel={() => setShow(false)}
        date={date || new Date()}
        locale='vi'
        title={"Chọn ngày"}
        cancelText='Hủy'
        confirmText='Xác nhận'
      />
    </>
  );
};

export default ControlledTextInputCalendar;
