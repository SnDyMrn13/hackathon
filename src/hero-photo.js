
import imageUrl from './image-url.js'


const heroPhoto = ({photo, width, height, sat, description}) =>{
const src = imageUrl ({photo, width, height, sat}) 
const alt = description
 return {src, alt}
}

export default heroPhoto

