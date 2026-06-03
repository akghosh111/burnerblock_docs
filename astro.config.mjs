import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.burnerblock.pro',
	integrations: [
		starlight({
			title: 'BurnerBlock Docs',
            head: [], // Explicitly initialized to prevent the 'head.some' crash
            customCss: [
                './src/styles/fonts.css',
                './src/styles/custom.css',
            ],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Welcome', link: '/introduction/welcome' },
						{ label: 'Why BurnerBlock', link: '/introduction/why-burnerblock' },
						{ label: 'How It Works', link: '/introduction/how-it-works' },
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Quick Start', link: '/getting-started/quick-start' },
						{ label: 'Authentication', link: '/getting-started/authentication' },
						{ label: 'API Keys', link: '/getting-started/api-keys' },
					],
				},
				{
					label: 'Email Verification',
					items: [
						{ label: 'Verify Email', link: '/email-verification/verify-email' },
						{ label: 'Risk Scores', link: '/email-verification/risk-scores' },
						{ label: 'Verdicts', link: '/email-verification/verdicts' },
						{ label: 'Response Structure', link: '/email-verification/response-structure' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'BetterAuth', link: '/integrations/betterauth' },
						{ label: 'Clerk', link: '/integrations/clerk' },
						{ label: 'Auth.js', link: '/integrations/authjs' },
						{ label: 'Supabase', link: '/integrations/supabase' },
						{ label: 'Firebase', link: '/integrations/firebase' },
					],
				},
				{
					label: 'CSV Verification',
					items: [
						{ label: 'Upload CSV', link: '/csv-verification/upload-csv' },
						{ label: 'Bulk Verification', link: '/csv-verification/bulk-verification' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Verify Email Endpoint', link: '/api-reference/verify-email' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'Next.js', link: '/examples/nextjs' },
						{ label: 'React', link: '/examples/react' },
						{ label: 'Express', link: '/examples/express' },
						{ label: 'Hono', link: '/examples/hono' },
					],
				},
				{
					label: 'AI Integrations',
					items: [
						{ label: 'Cursor', link: '/ai-integrations/cursor' },
						{ label: 'Claude Code', link: '/ai-integrations/claude-code' },
						{ label: 'Gemini CLI', link: '/ai-integrations/gemini-cli' },
					],
				},
			],
		}),
	],
});
