
import { create } from 'zustand';
import { Dish } from '../../../typings';
export type TempOrderState={
	tempOrder:Dish[],
    addToTempOrder: (items:any)=> void;
	setInitialTempOrder: (order:	Dish) => void;
	//setLoading: (bool: boolean) => void;
	//setError: (err: string) => void;
	//setUser: (user: User) => void;
}

export const useCartStore = create<TempOrderState>((set:any) => ({
	tempOrder:[],
	addToTempOrder: (items:any) => set((state:TempOrderState) => ({ tempOrder: [...state.tempOrder, items] })),
	setInitialTempOrder: (order:Dish) => set((state:any) => ({ tempOrder: [order] })),
}))