const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useDarks = () => ({ isDark, toggleDark })
