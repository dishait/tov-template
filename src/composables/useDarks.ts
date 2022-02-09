const isDark = useDark()
const toggleDark = useToggle(isDark)

export default () => ({ isDark, toggleDark })
