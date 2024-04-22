
import { create } from 'zustand';

export type AuthState={
	image:string,
    username:string,
    id:number,
    log:boolean,
    changeUsername: (username:any)=> void;
    changeId: (id:any)=> void;
    changeLog:()=>void;
    reset:()=>void;
    changeImage: (image:string) =>void;
	
}

export const useAuthStore = create<AuthState>((set:any) => ({
	username:'guest',
    id:0,
    log:true,
    image:'',
	changeUsername: (username:string) => set((state:AuthState) => ({ username:username })),
    changeId: (id:number) => set((state:AuthState) => ({ id:id })),
    changeLog: () => set((state:AuthState) => ({ log:!state.log })),
    changeImage: (image:string) => set((state:AuthState) => ({ image:image })),

    reset:()=>{
        set((state:AuthState) => ({ username:'guest' })),
        set((state:AuthState) => ({ id:0 }))
        set((state:AuthState) => ({ image:''}))
    }
}))