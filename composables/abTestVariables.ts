export const sendTestInfo = async (eventObj: { logic_type: string; split_type: string }) => {

  const eventId: any =
    process.env.NODE_ENV === 'production'
      ? window.localStorage.getItem('event_id')
      : '57238951'


  const formData = new FormData()
  formData.append('event_id', eventId)
  formData.append('logic_type', eventObj.logic_type)
  formData.append('split_type', eventObj.split_type)

  return await $fetch('https://event.fx2.io/store/forever', { method: 'POST', body: formData }).catch((error) => error.data)
}