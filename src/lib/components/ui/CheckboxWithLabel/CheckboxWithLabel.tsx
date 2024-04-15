"use client"

import { Checkbox } from "@/lib/components/ui/checkbox"
import { useId } from "react";


export type CheckboxWithLabelProps = {
  value: boolean;
  label: string;
  onClick: () => void;
}

export function CheckboxWithLabel({ value, label, onClick }: CheckboxWithLabelProps) {
  const id = useId();
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={id} onClick={onClick} checked={value} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </div>
  )
}
