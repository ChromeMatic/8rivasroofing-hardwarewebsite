
export const useThemeStore = defineStore('useThemeStore',{

    state:()=>({
        theme: false as boolean
    }),

    getters:{
        // @ts-ignore
        get_theme: (state) => state.theme
    },

    actions:{
        changeTheme(){
            // @ts-ignore
            this.theme = !this.theme
        }
    }
})