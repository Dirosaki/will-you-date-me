import '@/styles/global.css'
import { useRef } from 'react'
import { Button } from './components/ui/button'
import Marquee from './components/ui/marquee'
import { images } from './images'

export function App() {
	const buttonRef = useRef<HTMLButtonElement>(null)
	const handleYes = () => {
		alert('Você aceitou namorar comigo!')
		window.open('https://music.youtube.com/watch?v=izGwDsrQ1eQ', '_blank')
	}

	const generatePosition = (min: number, max: number) => {
		return Math.random() * (max - min) + min + '%'
	}

	const handleNo = () => {
		if (buttonRef.current) {
			buttonRef.current.style.position = 'absolute'
			buttonRef.current.style.bottom = generatePosition(10, 90)
			buttonRef.current.style.left = generatePosition(10, 90)
		}
	}

	return (
		<>
			<Marquee className='[--duration:50s]' repeat={6}>
				{images.map((image) => (
					<figure className='size-36'>
						<img src={image.src} alt='Couple' className='object-cover size-full' />
					</figure>
				))}
			</Marquee>

			<div className='flex flex-1 flex-col items-center justify-center overflow-hidden relative'>
				<h1 className='text-3xl'>Quer namorar comigo?</h1>

				<div className='mt-4 flex gap-4 w-60 justify-end'>
					<Button className='w-28' ref={buttonRef} onClick={handleNo} onMouseOver={handleNo}>
						Não
					</Button>

					<Button className='w-28 bg-indigo-500 hover:bg-indigo-600 transition-colors' onClick={handleYes}>
						Sim
					</Button>
				</div>
			</div>

			<Marquee reverse className='[--duration:50s]' repeat={6}>
				{images.map((image) => (
					<figure className='size-36'>
						<img src={image.src} alt='Couple' className='object-cover size-full' />
					</figure>
				))}
			</Marquee>
		</>
	)
}
