'use client';

import React from 'react';
import { Switch } from '../ui/switch';
import { checkboxValueType } from '@/app/page';

interface CheckboxWithTitleType {
  title: string;
  checkboxValue: boolean;
  setCheckBoxValue: Function;
  id: number;
}

const checkTrueValue = (checkboxValue: checkboxValueType[]): number => {
  let trueValue = 0
  checkboxValue.forEach((item) => {
    if (item.value) {
      trueValue += 1;
    }
  });
  return trueValue;
}

const unCheckbox = (checkboxValue: checkboxValueType[]): string => {
  let uncheckboxId: string = '';
  checkboxValue.forEach((item) => {
    if (!item.value) {
      uncheckboxId += item.title;
    }
  });
  return uncheckboxId;
}

const CheckboxWithTitle: React.FC<CheckboxWithTitleType> = ({ title, checkboxValue, setCheckBoxValue, id }) => {

  const mapping = new Map<string, string>([
    ['beautiful', 'dowry'],
    ['dowry', 'virgin'],
    ['virgin', 'beautiful']
  ]);

  const handleCheckboxChange = () => {
    setCheckBoxValue((prev: checkboxValueType[])=> {
      if(checkTrueValue(prev) === 2) {
        const title: string = unCheckbox(prev);
        const correstpondingTitle = mapping.get(title)
        console.log(correstpondingTitle);
        let temp = [...prev]
        const result = temp.map((item: checkboxValueType)=> {
          if(item.title === correstpondingTitle) {
            item.value = false;
          }
          if(item.title === title) {
            item.value = true;
          }
          return item;
        })
        console.log(result);
        return result;
      } else {
        let temp: checkboxValueType[] = [...prev]
        const result = temp.map((item: checkboxValueType)=> {
          if(item.id === id) {
            item.value =!item.value;
          }
          return item;
        })
        return result;
      }
    })
  }

  return (
    <>
      <div className="items-top flex space-x-2 gap-3">
        <Switch checked={checkboxValue} onCheckedChange={(e) => handleCheckboxChange()} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-md  w-[100px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {title}
          </label>
        </div>
      </div>
    </>
  )
}

export default CheckboxWithTitle;