export interface OptionsType {
  value: string | number; // the model value
  label: string; // the visible text for the input or option
  name: string; // the machine readable description of the input
  disabled?: boolean; // if true, the option is greyed out and not clickable
}

export interface AutocompleteDropdownButton {
  label?: string; // The text that appears on the button 
  class?: string; // The class for button style
  icon?: AutocompleteDropdownButtonIcon; // An option icon that will appear on the button 
}

export interface AutocompleteDropdownButtonIcon {
  class: string; // String for icon clas (font-awesome, glphicon, etc)
  altText: string; // String for alt icon text for screen readers
}

export interface HistoryNodeType {
  id: string; // identifier for node
  date: string; // date value for node
  url?: string; // url value for title
  title: string; // title value for node
  description?: string; 
  isTagged?: boolean;
}

// Autocomplete Config Interfaces

export interface AutocompleteConfig {
  name?: string;
  id?: string;
  labelText?: string;
  showClearButton?: boolean;
  allowAny?: boolean;
  keyValueConfig?: AutocompleteKeyValueConfig;
}

export interface AutocompleteKeyValueConfig {
  keyProperty: string;
  valueProperty: string;
}
