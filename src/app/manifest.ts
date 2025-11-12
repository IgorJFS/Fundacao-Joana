export default function manifest() {
  return {
    name: 'Fundação Joanna de Ângelis',
    short_name: 'Fundação Joanna',
    description: 'ONG transformando vidas em Rio das Ostras',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0EA5E9',
    icons: [
      {
        src: '/logoSemFundo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
