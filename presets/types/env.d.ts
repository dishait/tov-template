/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
	readonly VITE_APP_TITLE: string
	readonly VITE_APP_MARKDOWN: string
	readonly VITE_APP_DEV_TOOLS: string
	readonly VITE_APP_MOCK_IN_PRODUCTION: string
	readonly VITE_APP_COMPRESSINON_ALGORITHM: string
	readonly VITE_APP_API_AUTO_IMPORT: string
	readonly VITE_APP_DIR_API_AUTO_IMPORT: string 
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}