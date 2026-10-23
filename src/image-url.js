
const imageUrl = ({photo, width, height, sat}) =>
"https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&auto=format&fit=crop&q=60&bri=10&sat=" + sat


export default imageUrl