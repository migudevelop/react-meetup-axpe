export const mapMeetups = (meetups = []) =>
  meetups?.map(({ id, title, image, address, description }) => ({
    id,
    title,
    image,
    address,
    description
  }))
