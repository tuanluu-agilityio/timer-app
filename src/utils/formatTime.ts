const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MINUTE = 60

export const formatTime = (secs: number) => {
  const { hours, minutes, seconds } = calculateHoursMinutesAndSeconds(secs)

  const formattedHours = prependZeroIfLessThanTen(hours)
  const formattedMinutes = prependZeroIfLessThanTen(minutes)
  const formattedSeconds = prependZeroIfLessThanTen(seconds)

  return {
    formattedHours,
    formattedMinutes,
    formattedSeconds,
  }
}

const prependZeroIfLessThanTen = (time: number) => {
  const formattedTime: string = time < 10 ? `0${time}` : `${time}`
  return formattedTime
}

const calculateHoursMinutesAndSeconds = (secs: number) => {
  const hours = calculateHours(secs)
  const minutes = calculateMinutes(secs)
  const seconds = calculateSeconds(secs)

  return {
    hours,
    minutes,
    seconds,
  }
}

const calculateHours = (secs: number) => {
  const hours = Math.floor(secs / SECONDS_PER_HOUR)
  return hours
}

const calculateMinutes = (secs: number) => {
  const minutes = Math.floor((secs % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE)
  return minutes
}

const calculateSeconds = (secs: number) => {
  const seconds = Math.floor((secs % SECONDS_PER_HOUR) % SECONDS_PER_MINUTE)
  return seconds
}