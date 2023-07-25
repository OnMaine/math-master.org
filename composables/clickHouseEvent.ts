export const clickHouseEvent = async (options: { event_type: string; value?: string }) => {


  const eventId: any =
    process.env.NODE_ENV === 'production'
      ? window.localStorage.getItem('event_id')
      : '57238951'


  const formData = new FormData()
  formData.append('event_id', eventId)
  formData.append('event_type', options.event_type)
  if (options.value) {
    formData.append('value', options.value)
  }
  return await $fetch('https://event.fx2.io/store', { method: 'POST', body: formData }).catch((error) => error.data)
}