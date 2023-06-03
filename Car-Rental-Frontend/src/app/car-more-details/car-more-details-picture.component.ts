import { Component, ElementRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-picture-input',
  templateUrl: './picture-input.component.html',
  styleUrls: ['./picture-input.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: PictureInputComponent }]
})
export class PictureInputComponent implements ControlValueAccessor, MatFormFieldControl<File>, OnDestroy {
  static nextId = 0;

  @Input() placeholder: string;
  @Input() required: boolean;

  value: File | null;
  focused = false;
  controlType = 'app-picture-input';
  id = `picture-input-${PictureInputComponent.nextId++}`;
  onChange: (value: File | null) => void;
  onTouch: () => void;
  stateChanges = new Subject<void>();

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private elementRef: ElementRef<HTMLElement>
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get empty(): boolean {
    return !this.value;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elementRef.nativeElement.querySelector('input')?.focus();
    }
  }

  writeValue(value: File | null): void {
    this.value = value;
    this.stateChanges.next();
  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Do nothing
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.value = file;
    this.onChange(this.value);
    this.onTouch();
  }

  onInputFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  onInputBlur(): void {
    this.focused = false;
    this.onTouch();
    this.stateChanges.next();
  }

  get controlType(): string {
    return 'app-picture-input';
  }

  get errorState(): boolean {
    return this.ngControl.errors !== null && this.ngControl.touched;
  }

  get autofilled(): boolean {
    return false;
  }

  get disabled(): boolean {
    return this.ngControl.disabled;
  }

  setDescribedByIds(ids: string[]): void {
    // Do nothing
  }

  onContainerClick(event: MouseEvent): void {
    // Do nothing
  }
}