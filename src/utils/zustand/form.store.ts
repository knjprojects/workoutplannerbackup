/*import {create} from 'zustand';

// Create a Zustand store
export const useFormStore = create((set) => ({
  bears:0,
  field1: '',
  field2: '',
  setField1: (value:any) => set({ field1: value }),//state.
  setField2: (value:any) => set({ field2: value }),
  increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
}));*/
import { create } from 'zustand';

// Create a Zustand store
export const useFormStore = create((set:any) => ({
  bears: 0,
  keywords: '',
  //field2: '',
  channelArray: [], // Add the string array state
  selectedOption: null, // Add the selected option state
  dropdownOptions: [ // Add the dropdown options state
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    // Add more options as needed
  ],
  youtubeInput: {
    searchKeywords: '',
    maxResults: 10,
    startUrls: [],
    subtitlesLanguage: 'en',
    subtitlesFormat: 'srt'
  },
  setKeywords: (value:any) => set((state:any) => ({
    keywords: value,
    youtubeInput: { ...state.youtubeInput, searchKeywords: value }
  })),
  setChannelArray: (value:any) => set((state:any) => ({
    channelArray: value,
    youtubeInput: { ...state.youtubeInput, startUrls: value }
  })),
  setYoutubeInput: (value:any) => set((state:any) => ({ youtubeInput: { ...state.youtubeInput, ...value } })),
  increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
}));
  /*setField1: (value:any) => set({ field1: value,
   }),
  setField2: (value:any) => set({ field2: value }),
  setStringArray: (value:any) => set({ stringArray: value }), // Add method to set the string array
  setSelectedOption: (option:any) => set({ selectedOption: option }), // Add method to set the selected option
  increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),*/
//}));