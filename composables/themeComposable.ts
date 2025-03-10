export const  useTheme = ():Boolean =>{

    const theme = useThemeStore()
    let status = computed<boolean>(()=>{ return theme.get_theme })

    return status.value
}