'use client'

import { useTranslations } from 'hooks'
import { ChapterEnd } from 'ui'

export const metadata = {
  title: 'chapter_three.outro_one.title',
  image: '/assets/images/chapter-3-finish.jpg',
  theme: 'bg-transparent/20',
  secondaryTheme: 'bg-[#202233]',
  gradientTheme: 'from-[#202233] via-[#202233BF]',
  key: 'CH3OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <ChapterEnd
      image={metadata.image}
      direction="left"
      lang={lang}
      theme={metadata.secondaryTheme}
      gradientTheme={metadata.gradientTheme}
    >
      <h1 className="text-5xl font-bold text-white">
        {t('chapter_three.outro_one.heading')}
      </h1>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_three.outro_one.paragraph_one')}
      </p>
      <p className="mt-4 font-nunito text-2xl text-white">
        {t('chapter_three.outro_one.paragraph_two')}
      </p>
    </ChapterEnd>
  )
}
