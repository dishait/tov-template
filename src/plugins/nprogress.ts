import { router } from './router'
import { useNProgress } from '@vueuse/integrations/useNProgress'

// https://vueuse.org/integrations/useNProgress/
const { start, done } = useNProgress()

router.beforeEach(() => start())

router.afterEach(() => done(true))
