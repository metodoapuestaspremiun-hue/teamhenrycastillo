import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/'],
            },
            // Permitir explícitamente rastreadores y motores de respuesta de IA (ChatGPT, Claude, Perplexity, Gemini)
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'anthropic-ai',
                    'PerplexityBot',
                    'Google-Extended',
                    'Applebot-Extended',
                ],
                allow: '/',
                disallow: ['/private/', '/admin/'],
            },
            // Bloquear scrapers masivos que consumen servidor sin dar atribución ni tráfico
            {
                userAgent: ['Bytespider', 'CCBot'],
                disallow: '/',
            },
        ],
        sitemap: 'https://teamhenrycastillo.com/sitemap.xml',
    }
}

