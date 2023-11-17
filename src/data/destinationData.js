import moonImage from '../images/destination-moon.png'
import marsImage from '../images/destination-mars.png'
import europaImage from '../images/destination-europa.png'
import titanImage from '../images/destination-titan.png'

export const DestinationData = [
    {
        id: 1,
        title: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        image: moonImage,
        distance: '384,400 km',
        time: '3 days',
    },
    {
        id: 2,
        title: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        image: marsImage,
        distance: '225 MIL. km',
        time: '9 months',
    },
    {
        id: 3,
        title: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        image: europaImage,
        distance: '628 MIL. km',
        time: '3 years',
    },
    {
        id: 4,
        title: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        image: titanImage,
        distance: '1.6 BIL. km',
        time: '7 years',
    },
]