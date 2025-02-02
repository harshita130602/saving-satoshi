'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { Title } from 'ui'
import { Button } from 'shared'
import Avatar from 'components/Avatar'
import { useMediaQuery } from 'hooks'
import { useState, useEffect } from 'react'

export const metadata = {
  title: 'chapter_three.coop_vs_bitrey_loose.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH3COO1',
}

export default function Coop1({ lang }) {
  const t = useTranslations(lang)

  const saveAndProceed = useSaveAndProceed()
  const isSmallScreen = useMediaQuery({ width: 767 })
  const [playersFound, setPlayersFound] = useState(false)
  const [players, setPlayers] = useState([
    {
      username: 'You',
      avatar: '/assets/avatars/1.png',
      display: true,
    },
    {
      username: 'Mining Maniacs',
      avatar: '/assets/avatars/2.png',
      display: false,
    },
    {
      username: 'Hash Hoppers',
      avatar: '/assets/avatars/3.png',
      display: false,
    },
    {
      username: 'Coin Crunchers',
      avatar: '/assets/avatars/4.png',
      display: false,
    },
  ])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let playerCount = 1
    let updatedPlayers = players
    if (!playersFound) {
      interval = setInterval(() => {
        updatedPlayers = updatedPlayers.map((player, index) => {
          if (index === playerCount) {
            return { ...player, display: true }
          }
          return player
        })
        setPlayers(updatedPlayers)
        playerCount += 1
        if (playerCount == 4) {
          setPlayersFound(true)
        }
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [!playersFound])

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center md:my-auto md:flex md:flex-row">
      <div className="fade-in my-[30px] grid grid-cols-2 gap-[15px] md:order-last md:mx-[30px] md:h-[400px] md:w-[410px] md:gap-[30px]">
        {players.map((profile, i) => (
          <div className="h-[160px] w-[160px] border-2 border-dotted border-white/25 p-[15px] md:h-[185px] md:w-[190px]">
            <div className="flex justify-center md:mb-[15px]">
              {profile.display ? (
                <Avatar
                  avatar={profile.avatar}
                  size={isSmallScreen ? 75 : 100}
                />
              ) : (
                <div className="h-[75px] w-[75px] rounded-full bg-black/20 md:h-[100px] md:w-[100px]"></div>
              )}
            </div>
            <div className="p-2.5 text-center font-nunito text-base font-semibold text-white">
              {profile.display ? profile.username : 'Waiting...'}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`mb-5 flex w-full items-center px-[15px] transition-opacity md:mx-0 md:mb-0 md:mt-0 md:w-1/2 md:max-w-[405px] md:pl-[15px] md:pr-0 ${
          true ? 'fade-in' : 'fade-out'
        }`}
      >
        <div className="font-nunito text-white">
          <Title>
            {t('chapter_three.coop_vs_bitrey_loose.waiting_screen_heading')}
          </Title>
          <div className="mt-2 text-lg">
            {t(
              'chapter_three.coop_vs_bitrey_loose.waiting_screen_paragraph_one'
            )}
          </div>
          <div className="mt-8 text-lg">
            {t(
              'chapter_three.coop_vs_bitrey_loose.waiting_screen_paragraph_two'
            )}
          </div>
          <div className="mt-8 text-lg">
            {t(
              'chapter_three.coop_vs_bitrey_loose.waiting_screen_paragraph_three'
            )}
          </div>
          {playersFound ? (
            <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
              {t('chapter_three.coop_vs_bitrey_loose.continue_button')}
            </Button>
          ) : (
            <Button classes="mt-10 max-md:w-full" style="faded" disabled={true}>
              {t('chapter_three.coop_vs_bitrey_loose.waiting_button')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
