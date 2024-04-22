
import { create } from 'zustand';
import { Dish } from '../../../typings';
export type SidebarState={
	//tempOrder:Dish[],
    side:string,
    changeSide: (side:any)=> void;
	setInitialSide: (side:	string) => void;
	//setLoading: (bool: boolean) => void;
	//setError: (err: string) => void;
	//setUser: (user: User) => void;
}

export const useSidebarStore = create<SidebarState>((set:any) => ({
	side:'home',
	changeSide: (side:string) => set((state:SidebarState) => ({ side:side })),
	setInitialSide: (side:string) => set((state:any) => ({ side: side })),
}))